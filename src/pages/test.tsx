import React from 'react';
// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

function test() {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div style={{ width: '600px' }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
        <div style={{ height: '750px' }}>
          <Viewer
            fileUrl="/resume.pdf"
            // plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>

      {/* <Viewer
        fileUrl="/resume.pdf"
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
      /> */}
    </div>
  );
}

export default test;
