import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import PDF from './assets/resume.pdf';
import resume from './assets/resume.pdf';
import { useWindowWidth } from './hooks/windowWidth';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const width = useWindowWidth();

  const handleWindow = (e) => {
    e.preventDefault();
  }

  return (
    <Document
      className=''
      file={PDF}
      onContextMenu={handleWindow}
    >
      <Page
        pageNumber={1}
        renderMode='svg'
        //width: 100vw; max-width: 1000px
        width={Math.min(width * 1, 1000)}
      />
    </Document >
  );
}
