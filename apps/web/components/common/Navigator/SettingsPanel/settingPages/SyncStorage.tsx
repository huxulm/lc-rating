import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { API_BASE, LC_RATING_AUTH_TOKEN_KEY } from "@/config/constants";
import { useProgressStore } from "@/hooks/useProgress";
import { useSiteStorage } from "@/hooks/useSiteStorage";
import { Copy, HeartCrack, ThumbsUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SyncStorage() {
  const { siteStorage, setSiteStorage } = useSiteStorage();
  const setAllProgress = useProgressStore((state) => state.setAllProgress);
  const progressStr = JSON.stringify(siteStorage, null, 2);
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    setAuthToken(localStorage.getItem(LC_RATING_AUTH_TOKEN_KEY));

    const handleStorage = (event: StorageEvent) => {
      if (event.key === LC_RATING_AUTH_TOKEN_KEY) {
        setAuthToken(event.newValue);
      }
    };

    const handleAuthUpdate = () => {
      setAuthToken(localStorage.getItem(LC_RATING_AUTH_TOKEN_KEY));
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("lc-rating-auth-update", handleAuthUpdate);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("lc-rating-auth-update", handleAuthUpdate);
    };
  }, []);

  const form = useForm({
    defaultValues: {
      progressData: "",
    },
  });

  const cloudStatus = useMemo(
    () => (authToken ? "已登录" : "未登录"),
    [authToken]
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(progressStr);
    toast(<span className="text-green-500">复制成功</span>, {
      icon: <ThumbsUp className="text-green-500 size-full" />,
    });
  };

  const handleLogin = () => {
    window.location.href = `${API_BASE}/api/login/github`;
  };

  const handleLogout = () => {
    localStorage.removeItem(LC_RATING_AUTH_TOKEN_KEY);
    setAuthToken(null);
    toast(<span className="text-green-500">已退出登录</span>, {
      icon: <ThumbsUp className="text-green-500 size-full" />,
    });
  };

  const getToken = () =>
    authToken ?? localStorage.getItem(LC_RATING_AUTH_TOKEN_KEY);

  const handlePullCloud = async () => {
    const token = getToken();
    if (!token) {
      toast(<span className="text-red-500">请先登录</span>, {
        icon: <HeartCrack className="text-red-500 size-full" />,
      });
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/getprogress`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!data?.success) {
        throw new Error(data?.message ?? "拉取失败");
      }

      const rows = data?.result?.results ?? data?.result ?? [];
      const progress: Record<string, string> = {};
      rows.forEach((row: { problem_id?: string; progress?: string }) => {
        if (row.problem_id && row.progress) {
          progress[row.problem_id] = row.progress;
        }
      });

      setAllProgress(progress);
      toast(<span className="text-green-500">云端同步成功</span>, {
        icon: <ThumbsUp className="text-green-500 size-full" />,
      });
    } catch (error) {
      console.error("Error syncing from cloud:", error);
      toast(<span className="text-red-500">云端同步失败</span>, {
        icon: <HeartCrack className="text-red-500 size-full" />,
      });
    }
  };

  const handlePushCloud = async () => {
    const token = getToken();
    if (!token) {
      toast(<span className="text-red-500">请先登录</span>, {
        icon: <HeartCrack className="text-red-500 size-full" />,
      });
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/uploadprogress`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(siteStorage.progress),
      });
      const data = await response.json();
      if (!data?.success) {
        throw new Error(data?.message ?? "上传失败");
      }

      toast(<span className="text-green-500">云端上传成功</span>, {
        icon: <ThumbsUp className="text-green-500 size-full" />,
      });
    } catch (error) {
      console.error("Error syncing to cloud:", error);
      toast(<span className="text-red-500">云端上传失败</span>, {
        icon: <HeartCrack className="text-red-500 size-full" />,
      });
    }
  };

  const onSubmit = (data: { progressData: string }) => {
    try {
      const parsedData = JSON.parse(data.progressData);
      setSiteStorage(parsedData);
      toast(<span className="text-green-500">保存成功</span>, {
        icon: <ThumbsUp className="text-green-500 size-full" />,
      });
    } catch (error) {
      console.error("Error setting progress:", error);
      toast(<span className="text-red-500">保存失败</span>, {
        icon: <HeartCrack className="text-red-500 size-full" />,
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>云端状态: {cloudStatus}</span>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleLogin}>
              GitHub 登录
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              退出登录
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={handlePullCloud}>
            从云端拉取进度
          </Button>
          <Button variant="outline" onClick={handlePushCloud}>
            上传本地进度
          </Button>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {progressStr && (
            <div className="relative">
              <Textarea
                readOnly
                rows={5}
                value={progressStr}
                className="resize-none field-sizing-fixed"
              />
              <Button
                size="icon"
                variant="outline"
                className="absolute top-1 right-5 h-8 w-8"
                onClick={handleCopy}
                type="button"
              >
                <Copy />
              </Button>
            </div>
          )}
          <FormField
            control={form.control}
            name="progressData"
            render={({ field }) => (
              <FormItem>
                <FormLabel>输入站点数据:</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    className="resize-none field-sizing-fixed"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            导入站点数据
          </Button>
        </form>
      </Form>
    </div>
  );
}
