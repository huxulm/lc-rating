import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";

const Preference = () => {
  const { linkLanguage, toggleLinkLanguage, tagLanguage, toggleTagLanguage } =
    useGlobalSettingsStore();

  return (
    <div className="">
      <div className="flex items-center gap-2">
        <span>超链接:</span>
        <Label htmlFor="airplane-mode">中文</Label>
        <Switch
          id="airplane-mode"
          checked={linkLanguage !== "zh"}
          onCheckedChange={toggleLinkLanguage}
          className="data-[state=unchecked]:bg-red-400 data-[state=checked]:bg-blue-400"
        />
        <Label htmlFor="airplane-mode">英文</Label>
      </div>
      <div className="flex items-center gap-2">
        <span>标签:</span>
        <Label htmlFor="airplane-mode">中文</Label>
        <Switch
          id="airplane-mode"
          checked={tagLanguage !== "zh"}
          onCheckedChange={toggleTagLanguage}
          className="data-[state=unchecked]:bg-red-400 data-[state=checked]:bg-blue-400"
        />
        <Label htmlFor="airplane-mode">英文</Label>
      </div>
    </div>
  );
};

Preference.displayName = "Preference";

export { Preference };
