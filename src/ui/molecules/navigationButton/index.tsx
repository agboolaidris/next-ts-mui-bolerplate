import { ArrowForward } from '@mui/icons-material';
import { Stack } from '@mui/material';
import React from 'react';
import { AnimationIconWrapper } from '../../atoms/button';
import Link from '../Link';
import { NavigationButtonWrapper } from './style';

interface Props {
  text: string;
  href?: string;
}
function NavigationButton({ text, href }: Props) {
  return (
    <Link href={href || '/'}>
      <NavigationButtonWrapper>{text}</NavigationButtonWrapper>
    </Link>
  );
}

export default NavigationButton;
