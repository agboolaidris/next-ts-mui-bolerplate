import React from 'react';
import { TextStyled, LightText } from './style';
interface Props {
  text: string;
}
function TextAnimated({ text }: Props) {
  return (
    <TextStyled>
      {text.split('').map((letter, i) => (
        <LightText style={{ animationDelay: `0.${i}s` }} key={i}>
          {letter}
        </LightText>
      ))}
    </TextStyled>
  );
}

export default TextAnimated;
