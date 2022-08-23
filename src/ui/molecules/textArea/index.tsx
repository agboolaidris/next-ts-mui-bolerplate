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
function TextArea({ sx, placeholder, onChange, name, value }: Props) {
  return (
    <TextInputStyled sx={sx}>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </TextInputStyled>
  );
}

export default TextArea;
