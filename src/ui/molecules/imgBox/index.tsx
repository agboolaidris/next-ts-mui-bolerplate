import Image from 'next/image';
import React from 'react';
import { ImgBoxInsideWrapper, ImgBoxOutsideWrapper } from './style';

interface Props {
  src: string;
}
function ImgBox({ src }: Props) {
  return (
    <ImgBoxOutsideWrapper>
      <ImgBoxInsideWrapper>
        <Image src={src} layout="fill" alt="Idris Agboola" />
      </ImgBoxInsideWrapper>
    </ImgBoxOutsideWrapper>
  );
}

export default ImgBox;
