import { createContext } from "react";

type SelectContextType = {
  value: string;
  onSelect: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  displayLabel: string | React.ReactNode;
};

export const SelectContext = createContext<SelectContextType>({
  value: "",
  onSelect: () => {},
  isOpen: false,
  setIsOpen: () => {},
  displayLabel: "",
});
