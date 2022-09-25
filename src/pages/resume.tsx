import { Typography } from '@mui/material';
import React, { useState, ReactElement } from 'react';
import Layout from '../layout';
import { ResumeWrapper } from '../ui/atoms/resumeWarpper';
import { IconWrapper, LinkButton } from '../ui/atoms/button';

import ShareIcon from '@mui/icons-material/Share';
import SocialShare from '../ui/molecules/socialShare';
import LearnMore from '../ui/molecules/learnMore';

// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import {
  defaultLayoutPlugin,
  ToolbarProps,
  ToolbarSlot,
} from '@react-pdf-viewer/default-layout';
import { TransformToolbarSlot, toolbarPlugin } from '@react-pdf-viewer/toolbar';

function Resume() {
  // Create new plugin instance
  const { renderDefaultToolbar } = toolbarPlugin();
  const [open, setOpen] = useState(false);
  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    EnterFullScreen: () => <></>,
    SwitchTheme: () => <></>,
    OpenMenuItem: () => <></>,
    Open: () => <></>,
  });

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar: (Toolbar: (props: ToolbarProps) => ReactElement) => (
      <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
    ),
    sidebarTabs: () => [],
  });

  return (
    <Layout>
      <Typography variant="h3">Resumé.</Typography>
      <Typography sx={{ marginY: 4 }}>
        Contact me via{' '}
        <a href="contact">
          <LinkButton> contact page</LinkButton>
        </a>
        .
        <a download href="resume.pdf">
          <LinkButton> Download </LinkButton>
        </a>
        or
        <a href="#">
          {' '}
          <LinkButton onClick={handleOpenModal}> share </LinkButton>
        </a>
        my Resume.
      </Typography>
      <ResumeWrapper>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
          <div className="viewer-wrapper">
            <Viewer
              fileUrl="/resume.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </ResumeWrapper>
      <SocialShare handleClose={handleCloseModal} open={open} />
      <LearnMore text="Learn More About Me" />
    </Layout>
  );
}

export default Resume;
