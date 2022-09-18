import { Theme, SxProps } from '@mui/material';
import React from 'react';
import { TextInputStyled } from './style';
interface Props {
  sx?: SxProps<Theme>;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: any) => void;
  error?: string;
}
function TextInput({ sx, placeholder, onChange, name, value, error }: Props) {
  return (
    <TextInputStyled sx={sx} error={!!error}>
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
      <p>{error}</p>
    </TextInputStyled>
  );
}

export default TextInput;
