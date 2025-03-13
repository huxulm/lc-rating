import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { LC_RATING_PROGRESS_KEY } from "@/config/constants";
import { OptionKey } from "@/hooks/useOptions";
import { useProgressStore } from "@/hooks/useProgress";
import debounce from "debounce";
import { Copy, HeartCrack, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function SyncProgress() {
  const [syncStatus, setSyncStatus] = useState<
    "idle" | "fetched" | "set" | "error"
  >("idle");
  const { progress, setAllProgress } = useProgressStore();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const form = useForm({
    defaultValues: {
      progressData: "",
    },
  });

  const progressStr = JSON.stringify(progress, null, 2);

  const handleFetchProgress = () => {
    form.setValue("progressData", progressStr);
    setSyncStatus("fetched");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(progressStr);
  };

  const onSubmit = (data: { progressData: string }) => {
    try {
      const parsedData = JSON.parse(data.progressData) as Record<
        string,
        OptionKey
      >;
      setAllProgress(parsedData);
      setSyncStatus("set");
    } catch (error) {
      console.error("Error setting progress:", error);
      setSyncStatus("error");
    }
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowHeight(window.innerHeight);
    }, 100);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="space-y-4">
      <Button onClick={handleFetchProgress}>下载题目进度</Button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {syncStatus === "fetched" && (
            <FormField
              name="progressData"
              render={() => (
                <FormItem>
                  <div className="relative">
                    <Textarea
                      readOnly
                      rows={windowHeight / 50}
                      value={progressStr}
                      className="pr-10"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-1 right-1 h-8 w-8"
                      onClick={handleCopy}
                      type="button"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="progressData"
            render={({ field }) => (
              <FormItem>
                <FormLabel>输入题目进度:</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={windowHeight / 50}
                    className="resize-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            上传题目进度
          </Button>
        </form>
      </Form>

      {syncStatus === "set" && (
        <Alert variant="default">
          <ThumbsUp />
          <AlertDescription className="text-green-700">
            保存至 {`localStorage["${LC_RATING_PROGRESS_KEY}"]`}
          </AlertDescription>
        </Alert>
      )}

      {syncStatus === "error" && (
        <Alert variant="destructive">
          <HeartCrack />
          <AlertDescription>保存失败</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
