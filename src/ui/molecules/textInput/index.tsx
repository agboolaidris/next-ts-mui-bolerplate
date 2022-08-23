import { Theme, SxProps } from '@mui/material';
import React from 'react';
import { TextInputStyled } from './style';
interface Props {
  sx?: SxProps<Theme>;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: any) => void;
}
function TextInput({ sx, placeholder, onChange, name, value }: Props) {
  return (
    <TextInputStyled sx={sx}>
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </TextInputStyled>
  );
}

export default TextInput;
