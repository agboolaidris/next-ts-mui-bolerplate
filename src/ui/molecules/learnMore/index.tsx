import { ArrowForward } from '@mui/icons-material';
import { Stack } from '@mui/material';
import React from 'react';
import { AnimationIconWrapper } from '../../atoms/button';
import Link from '../Link';
interface Props {
  text: string;
}
function LearnMore({ text }: Props) {
  return (
    <Link href="/">
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ marginTop: { xs: 1, md: 4 } }}
      >
        <p>{text}</p>
        <AnimationIconWrapper>
          <ArrowForward />
        </AnimationIconWrapper>
      </Stack>
    </Link>
  );
}

export default LearnMore;
