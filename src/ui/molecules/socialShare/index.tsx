import * as React from 'react';
import { styled, Theme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { Stack } from '@mui/system';
import { SocialIconWrapper } from './style';
import {
  FacebookRounded,
  Twitter,
  LinkedIn,
  WhatsApp,
  EmailRounded,
} from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.white} !important;
  background: ${({ theme }) => theme.colors.black};
  & > div {
    & > div {
      text-align: center;
      background: ${({ theme }) => theme.colors.lightBlack};
    }
  }
  p,
  h5 {
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

interface Props {
  open: boolean;
  handleClose: () => void;
}
export default function SocialShare({ open, handleClose }: Props) {
  const url = process.env.NEXT_PUBLIC_URL + '/resume';
  const content = 'This is such an amazing portfolio that I found online';
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ padding: 4 }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="h5" sx={{ fontWeight: 'bolder' }}>
          Idris Agboola
        </Typography>

        <Typography gutterBottom>
          I would appreciate it if you shared my resume on any of these social
          networks
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 4 }}
        >
          <EmailShareButton url={url} subject="">
            <SocialIconWrapper>
              <EmailRounded />
            </SocialIconWrapper>
          </EmailShareButton>
          <LinkedinShareButton url={url} title={content}>
            <SocialIconWrapper>
              <LinkedIn />
            </SocialIconWrapper>
          </LinkedinShareButton>
          <TwitterShareButton url={url} hashtags={['dev']} title={content}>
            <SocialIconWrapper>
              <Twitter />
            </SocialIconWrapper>
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={content}>
            <SocialIconWrapper>
              <FacebookRounded />
            </SocialIconWrapper>
          </FacebookShareButton>
          <WhatsappShareButton url={url} title={content}>
            <SocialIconWrapper>
              <WhatsApp />
            </SocialIconWrapper>
          </WhatsappShareButton>
        </Stack>
      </DialogContent>
    </BootstrapDialog>
  );
}
