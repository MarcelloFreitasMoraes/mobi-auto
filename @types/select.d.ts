interface Option {
  name: string;
  value: string;
}
export interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  options: Option[];
  disabled?: boolean;
}
