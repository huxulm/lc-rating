import { OptionValue, Options, useOptions } from "@/hooks/useOptions";
import { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
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
  }, [savedFormData, form.reset]);

  const onSubmit = (data: { options: OptionValue[] }) => {
    const newOptions = data.options.reduce((acc: Options, item) => {
      acc[item.key] = { ...item };
      return acc;
    }, {});
    setOptions(newOptions);
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
