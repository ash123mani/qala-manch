import { Size } from "@/utils/types";

export interface DropDownProps {
  selectionText?: string;
  size?: Size
  className?: string;
  defaultSelected?: any[] | [];
  multiSelect?: boolean;
  idKey?: string;
  nameKey?: string;
  options: ListItem[];
  onOptionChange: ({}:CbOptionChange) => void;
}

export interface ListItem {
  [name: string]: string;
}

export interface CbOptionChange {
  currentSelectedOption: ListItem,
  allSelectedOption: ListItem[]
}