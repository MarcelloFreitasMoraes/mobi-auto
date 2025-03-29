// "use client";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";
 import { CustomControllerProps } from "@/@types/forms";

export const CustomController: React.FC<CustomControllerProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  disabled = false,
  control,
}) => (
  <Controller
  name={name}
  control={control}
  render={({ field }) => (
    <Autocomplete
      {...field}
      value={options.find(option => option.value === value) || null}
      options={options}
      getOptionLabel={(option) => option.name}
      onChange={(_, newValue) => onChange(newValue?.value || '')}
      disabled={disabled}
      disableClearable={disabled}
      noOptionsText="Nenhuma opção"
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          disabled={disabled}
          variant="outlined"
          fullWidth
        />
      )}
    />
  )}
/>
);
