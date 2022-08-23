import Image from 'next/image';
import React from 'react';
import { ImgBoxInsideWrapper, ImgBoxOutsideWrapper } from './style';

function ImgBox() {
  return (
    <ImgBoxOutsideWrapper>
      <ImgBoxInsideWrapper>
        <Image src="/vercel.svg" layout="fill" />
      </ImgBoxInsideWrapper>
    </ImgBoxOutsideWrapper>
  );
}

export default ImgBox;
