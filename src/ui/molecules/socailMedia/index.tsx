import { FacebookRounded, Twitter } from '@mui/icons-material';
import { Stack, SxProps, Theme } from '@mui/material';
import React from 'react';
import { IconWrapper } from '../../atoms/button';
import Link from '../Link';
interface Props {
  sx?: SxProps<Theme>;
}
function SocailMedia({ sx }: Props) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ marginTop: { xs: 2, md: 4 }, ...sx }}
    >
      <Link href="/">
        <IconWrapper>
          <FacebookRounded />
        </IconWrapper>
      </Link>
      <Link href="/">
        <IconWrapper>
          <Twitter />
        </IconWrapper>
      </Link>
    </Stack>
  );
}

export default SocailMedia;
