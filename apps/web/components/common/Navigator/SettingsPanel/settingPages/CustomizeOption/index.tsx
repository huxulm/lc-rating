import { OptionValue, Options, useOptions } from "@/hooks/useOptions";
import { ThumbsUp } from "lucide-react";
import { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { OptionsForm } from "./OptionsForm";
import { Preview } from "./Preview";

function CustomizeOptions() {
  const { optionKeys, getOption, setOptions } = useOptions();

  const savedFormData = useMemo(() => {
    return optionKeys.map(getOption);
  }, [optionKeys, getOption]);

  const form = useForm<{ options: OptionValue[] }>({
    defaultValues: {
      options: savedFormData,
    },
  });

  useEffect(() => {
    form.reset({ options: savedFormData });
  }, [form, savedFormData]);

  const onSubmit = (data: { options: OptionValue[] }) => {
    const newOptions = data.options.reduce((acc: Options, item) => {
      acc[item.key] = { ...item };
      return acc;
    }, {});
    setOptions(newOptions);
    toast(<span className="text-green-500">保存成功</span>, {
      icon: <ThumbsUp className="text-green-500 size-full" />,
    });
  };

  const options = useWatch({ name: "options", control: form.control });

  return (
    <div className="">
      <div className="flex flex-row gap-3">
        <div>
          <OptionsForm form={form} onSubmit={form.handleSubmit(onSubmit)} />
        </div>
        <div className="">
          <Preview options={options} />
        </div>
      </div>
    </div>
  );
}

export default CustomizeOptions;
