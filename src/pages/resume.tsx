import { Container, Stack, Typography, Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../layout';
import { pdfjs, Document, Page } from 'react-pdf';
import { ResumeWrapper } from '../ui/atoms/resumeWarpper';
import Link from '../ui/molecules/Link';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { IconWrapper, LinkButton } from '../ui/atoms/button';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const handle = useFullScreenHandle();

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Layout>
      <Container sx={{ marginTop: { xs: 4, md: 10 } }}>
        <Typography variant="h3">Resumé.</Typography>
        <Typography sx={{ marginY: 4 }}>
          Lorem ipsum dolor sit amet,
          <a download href="resume.pdf">
            <LinkButton>Download</LinkButton>
          </a>
          consectetur adipisicing elit. Quia iste .
        </Typography>
        <FullScreen handle={handle}>
          <ResumeWrapper full={handle.active}>
            <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} className={'PDFPage PDFPageOne'} />
            </Document>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ paddingX: 2 }}
            >
              <Stack direction="row" spacing={2}>
                <IconWrapper>
                  <ArrowBackOutlinedIcon />
                </IconWrapper>
                <span>
                  {pageNumber} of {numPages}
                </span>
                <IconWrapper>
                  <ArrowForwardOutlinedIcon />
                </IconWrapper>
              </Stack>
              <Stack direction="row" spacing={1}>
                <a download href="resume.pdf">
                  <IconWrapper>
                    <SystemUpdateAltOutlinedIcon />
                  </IconWrapper>
                </a>
                <IconWrapper className="link" onClick={handle.enter}>
                  <FullscreenOutlinedIcon />
                </IconWrapper>
              </Stack>
            </Stack>
          </ResumeWrapper>
        </FullScreen>
      </Container>
    </Layout>
  );
}

export default Resume;
