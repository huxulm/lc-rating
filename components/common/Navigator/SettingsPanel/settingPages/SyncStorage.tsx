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
import { useSiteStorage } from "@/hooks/useSiteStorage";
import debounce from "debounce";
import { Copy, HeartCrack, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function SyncStorage() {
  const [syncStatus, setSyncStatus] = useState<
    "idle" | "fetched" | "set" | "error"
  >("idle");

  const { siteStorage, setSiteStorage } = useSiteStorage();

  const form = useForm({
    defaultValues: {
      progressData: "",
    },
  });

  const progressStr = JSON.stringify(siteStorage, null, 2);

  const handleFetchProgress = () => {
    form.setValue("progressData", progressStr);
    setSyncStatus("fetched");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(progressStr);
  };

  const onSubmit = (data: { progressData: string }) => {
    try {
      const parsedData = JSON.parse(data.progressData);
      setSiteStorage(parsedData);
      setSyncStatus("set");
    } catch (error) {
      console.error("Error setting progress:", error);
      setSyncStatus("error");
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleFetchProgress}>导出站点数据</Button>

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
                      rows={5}
                      value={progressStr}
                      className="resize-none field-sizing-fixed"
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

      {syncStatus === "set" && (
        <Alert variant="default">
          <ThumbsUp />
          <AlertDescription className="text-green-700">
            保存成功
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
