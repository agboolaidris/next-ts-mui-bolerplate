import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../layout';
import { pdfjs, Document, Page } from 'react-pdf';
import { ResumeWrapper } from '../ui/atoms/resumeWarpper';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { IconWrapper, LinkButton } from '../ui/atoms/button';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ShareIcon from '@mui/icons-material/Share';
import SocialShare from '../ui/molecules/socialShare';
import LearnMore from '../ui/molecules/learnMore';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = useState(false);
  const handle = useFullScreenHandle();

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  const handlePrevPage = () => {
    if (pageNumber === 1) {
      setPageNumber(numPages);
    } else {
      setPageNumber((prev) => prev - 1);
    }
  };
  const handleNextPage = () => {
    if (numPages === pageNumber) {
      setPageNumber(1);
    } else {
      setPageNumber((prev) => prev + 1);
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <Layout>
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
              <IconWrapper onClick={handlePrevPage}>
                <ArrowBackOutlinedIcon />
              </IconWrapper>
              <span>
                {pageNumber} of {numPages}
              </span>
              <IconWrapper onClick={handleNextPage}>
                <ArrowForwardOutlinedIcon />
              </IconWrapper>
            </Stack>
            <Stack direction="row" spacing={2}>
              {/* <a download href="resume.pdf">
                  <IconWrapper>
                    <SystemUpdateAltOutlinedIcon />
                  </IconWrapper>
                </a> */}
              <IconWrapper className="link" onClick={handleOpenModal}>
                <ShareIcon />
              </IconWrapper>
              <IconWrapper className="link" onClick={handle.enter}>
                <FullscreenOutlinedIcon />
              </IconWrapper>
            </Stack>
          </Stack>
        </ResumeWrapper>
      </FullScreen>
      <LearnMore text="Learn More About Me" />

      <SocialShare handleClose={handleCloseModal} open={open} />
    </Layout>
  );
}

export default Resume;
