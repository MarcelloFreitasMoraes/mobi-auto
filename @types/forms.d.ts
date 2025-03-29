export interface FormsProps {
  data: {
    nome: string;
    codigo: string;
  }[];

  mark?: {
    modelos: Modelo[];
    anos: Ano[];
  };

  model?:
    | string
    | {
        nome: string;
        codigo: string;
      };
}

export interface Modelo {
  codigo: number;
  nome: string;
}

export interface Ano {
  codigo: string;
  nome: string;
}

export interface FormData {
  mark: string;
  model: string;
  year: string;
}

export interface CustomControllerProps {
  name: string;
  label: string;
  options: { name: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  control: Control<FormData>;
}
