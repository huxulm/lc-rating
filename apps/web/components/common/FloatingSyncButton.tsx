"use client";

import { Button } from "@/components/ui/button";
import {
  API_BASE,
  LC_RATING_AUTH_TOKEN_KEY,
  LC_RATING_LAST_SYNC_AT_KEY,
} from "@/config/constants";
import { useProgressStore } from "@/hooks/useProgress";
import { useSiteStorage } from "@/hooks/useSiteStorage";
import { CloudDownload, CloudUpload, LogIn, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

const FloatingSyncButton = () => {
  const { siteStorage } = useSiteStorage();
  const setAllProgress = useProgressStore((state) => state.setAllProgress);
  const [authToken, setAuthToken] = useState<string | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }
    return localStorage.getItem(LC_RATING_AUTH_TOKEN_KEY);
  });
  const [open, setOpen] = useState(false);
  const [lastSyncAt, setLastSyncAt] = useState<number | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }
    const stored = localStorage.getItem(LC_RATING_LAST_SYNC_AT_KEY);
    return stored ? Number(stored) : null;
  });
  const isLoggedIn = Boolean(authToken);

  useEffect(() => {
    setAuthToken(localStorage.getItem(LC_RATING_AUTH_TOKEN_KEY));
    const stored = localStorage.getItem(LC_RATING_LAST_SYNC_AT_KEY);
    setLastSyncAt(stored ? Number(stored) : null);

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

  const latestLocalUpdate = useMemo(() => {
    const timestamps = Object.values(siteStorage.progressUpdatedAt ?? {});
    return timestamps.length ? Math.max(...timestamps) : null;
  }, [siteStorage.progressUpdatedAt]);

  const isOutOfSync = Boolean(
    isLoggedIn &&
      latestLocalUpdate &&
      (!lastSyncAt || latestLocalUpdate > lastSyncAt)
  );

  const getToken = () =>
    authToken ?? localStorage.getItem(LC_RATING_AUTH_TOKEN_KEY);

  const handleLogin = () => {
    window.location.href = `${API_BASE}/api/login/github`;
  };

  const handlePullCloud = async () => {
    const token = getToken();
    if (!token) {
      toast("请先登录");
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
      const progressUpdatedAt: Record<string, number> = {};
      rows.forEach(
        (row: { problem_id?: string; progress?: string; updated_at?: string }) => {
          if (row.problem_id && row.progress) {
            progress[row.problem_id] = row.progress;
            if (row.updated_at) {
              const timestamp = Date.parse(row.updated_at);
              if (!Number.isNaN(timestamp)) {
                progressUpdatedAt[row.problem_id] = timestamp;
              }
            }
          }
        }
      );

      setAllProgress(progress, progressUpdatedAt);
      const now = Date.now();
      localStorage.setItem(LC_RATING_LAST_SYNC_AT_KEY, String(now));
      setLastSyncAt(now);
      toast("云端同步成功");
    } catch (error) {
      console.error("Error syncing from cloud:", error);
      toast("云端同步失败");
    } finally {
      setOpen(false);
    }
  };

  const handlePushCloud = async () => {
    const token = getToken();
    if (!token) {
      toast("请先登录");
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/uploadprogress`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          progress: siteStorage.progress,
          progressUpdatedAt: siteStorage.progressUpdatedAt ?? {},
        }),
      });
      const data = await response.json();
      if (!data?.success) {
        throw new Error(data?.message ?? "上传失败");
      }

      const now = Date.now();
      localStorage.setItem(LC_RATING_LAST_SYNC_AT_KEY, String(now));
      setLastSyncAt(now);
      toast("云端上传成功");
    } catch (error) {
      console.error("Error syncing to cloud:", error);
      toast("云端上传失败");
    } finally {
      setOpen(false);
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2 pointer-events-auto"
      data-floating-sync
    >
      {open ? (
        <div className="flex flex-col gap-2 rounded-lg border bg-background p-2 shadow-lg">
          {isLoggedIn ? (
            <>
              <Button
                variant="outline"
                className="justify-start gap-2"
                onClick={handlePullCloud}
              >
                <CloudDownload className="h-4 w-4" />
                拉取进度
              </Button>
              <Button
                variant="outline"
                className="justify-start gap-2"
                onClick={handlePushCloud}
              >
                <CloudUpload className="h-4 w-4" />
                上传进度
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              className="justify-start gap-2"
              onClick={handleLogin}
            >
              <LogIn className="h-4 w-4" />
              登录后同步
            </Button>
          )}
        </div>
      ) : null}
      <div className="relative">
        <Button
          size="icon"
          variant={isLoggedIn ? "default" : "outline"}
          className={`h-12 w-12 rounded-full shadow-lg ${
            isLoggedIn
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : ""
          }`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="云端同步"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : isLoggedIn ? (
            <CloudUpload className="h-5 w-5" />
          ) : (
            <LogIn className="h-5 w-5" />
          )}
        </Button>
        {isOutOfSync ? (
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber-400 ring-2 ring-background" />
        ) : null}
      </div>
    </div>
  );
};

export { FloatingSyncButton };
