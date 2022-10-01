import {
  FacebookRounded,
  Twitter,
  GitHub,
  LinkedIn,
} from '@mui/icons-material';
import { Stack, SxProps, Theme } from '@mui/material';
import React from 'react';
import { SocialMediaWrapper, SocialMediaIconWrapper } from './style';

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
      <a href="https://github.com/agboolaidris">
        <SocialMediaIconWrapper>
          <GitHub />
        </SocialMediaIconWrapper>
      </a>
      <a href="https://www.linkedin.com/in/idrisagboola/">
        <SocialMediaIconWrapper>
          <LinkedIn />
        </SocialMediaIconWrapper>
      </a>
      <a href="https://twitter.com/I_AM_IDRIIS">
        <SocialMediaIconWrapper>
          <Twitter />
        </SocialMediaIconWrapper>
      </a>
      <a href="https://web.facebook.com/agboola.idreez">
        <SocialMediaIconWrapper>
          <FacebookRounded />
        </SocialMediaIconWrapper>
      </a>
    </Stack>
  );
}

export default SocailMedia;

export function SocailMedia2({ sx }: Props) {
  return (
    <SocialMediaWrapper>
      <a href="https://github.com/agboolaidris">
        <SocialMediaIconWrapper>
          <GitHub />
        </SocialMediaIconWrapper>
      </a>
      <a href="https://www.linkedin.com/in/idrisagboola/">
        <SocialMediaIconWrapper>
          <LinkedIn />
        </SocialMediaIconWrapper>
      </a>
      <a href="https://twitter.com/I_AM_IDRIIS">
        <SocialMediaIconWrapper>
          <Twitter />
        </SocialMediaIconWrapper>
      </a>
      <a href="https://web.facebook.com/agboola.idreez">
        <SocialMediaIconWrapper>
          <FacebookRounded />
        </SocialMediaIconWrapper>
      </a>
      <div className="line"></div>
    </SocialMediaWrapper>
  );
}
