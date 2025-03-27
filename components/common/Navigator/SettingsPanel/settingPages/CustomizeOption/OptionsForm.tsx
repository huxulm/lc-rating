import { Button } from "@/components/ui-customized/button";
import { Form, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { defaultOptions, OptionValue } from "@/hooks/useOptions";
import { cn } from "@/lib/utils";
import React, { useCallback } from "react";
import { useFieldArray, UseFormReturn, useWatch } from "react-hook-form";

interface OptionsFormProps {
  form: UseFormReturn<{
    options: OptionValue[];
  }>;
  onSubmit: () => void;
}

const OptionsForm = React.memo(({ form, onSubmit }: OptionsFormProps) => {
  const options = useWatch({ name: "options", control: form.control });

  const fieldArray = useFieldArray({
    control: form.control,
    name: "options",
  });

  const errors = form.formState.errors.options;

  const handleAdd = useCallback(
    () => fieldArray.append({ key: "", label: "", color: "#000000" }),
    [fieldArray]
  );

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-3">
          {fieldArray.fields.map((field, index) => {
            const isDefault = field.key in defaultOptions;
            return (
              <div key={index} className="flex gap-2 items-start">
                <div className="space-y-1">
                  <Input
                    placeholder="主键 Key"
                    {...form.register(`options.${index}.key`, {
                      validate: (value) => {
                        if (value.trim() === "") {
                          return "Key不能为空";
                        }
                        const isDuplicate = options.some(
                          (opt, i) => i !== index && opt.key === value
                        );
                        if (isDuplicate) {
                          return "Key已存在";
                        }
                        return true;
                      },
                    })}
                    disabled={isDefault}
                  />
                  {errors?.[index]?.key && (
                    <FormMessage>{errors[index]?.key?.message}</FormMessage>
                  )}
                </div>

                <div className="">
                  <Input
                    placeholder="标签 Label"
                    {...form.register(`options.${index}.label`)}
                  />
                </div>

                <div className="flex gap-2 items-center">
                  <Input
                    type="color"
                    className="size-8 p-0 border-none"
                    {...form.register(`options.${index}.color`)}
                  />
                  <Button
                    variant="destructive"
                    className={cn({ invisible: isDefault })}
                    onClick={() => fieldArray.remove(index)}
                    type="button"
                  >
                    删除
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" onClick={handleAdd} type="button">
            添加新行
          </Button>
          <Button type="submit">保存配置</Button>
        </div>
      </form>
    </Form>
  );
});

OptionsForm.displayName = "OptionsForm";

export { OptionsForm };
