import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useSiteStorage } from "@/hooks/useSiteStorage";
import { Copy, HeartCrack, ThumbsUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SyncStorage() {
  const { siteStorage, setSiteStorage } = useSiteStorage();
  const progressStr = JSON.stringify(siteStorage, null, 2);

  const form = useForm({
    defaultValues: {
      progressData: "",
    },
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(progressStr);
    toast(<span className="text-green-500">复制成功</span>, {
      icon: <ThumbsUp className="text-green-500 size-full" />,
    });
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
