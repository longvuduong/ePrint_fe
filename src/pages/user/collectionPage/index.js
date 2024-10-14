import React, { useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './style.scss';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import * as CollectionService from '../../../services/CollectionService';
import useWindowWide from './usewidth';
import pdf from '../../../../src/collection/medicine.pdf';
import pdf1 from '../../../../src/collection/farm.pdf';

import { useParams } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function FlipBook() {
  const [file, setFile] = useState();
  const { id } = useParams();
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const widthScreen = useWindowWide();
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  useEffect(() => {
    if (widthScreen < 600) {
      setWidth(400);
      setHeight(300);
    } else {
      setWidth(Math.ceil((0.9 * widthScreen) / 2));
      setHeight(Math.ceil((0.6 * widthScreen) / 2));
    }
  }, [widthScreen]);
  const getDetailCollection = async id => {
    const res = await CollectionService.getDetailsCollection(id);
    if (res?.status === 'OK') {
      setFile(res?.data);
    } else {
    }
  };
  useEffect(() => {
    if (id) {
      getDetailCollection(id);
    }
  }, [id]);

  return (
    <>
      <div className="flex" style={{ padding: '50px 0' }}>
        <HTMLFlipBook width={width} height={height} showCover={true}>
          {[...Array(numPages + 1).keys()].map(pageNumber => (
            <div key={pageNumber} className="page">
              <Document file={file && file.typeSlug === 'nong-san' ? pdf1 : pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width={width} height={height} renderTextLayer={false} renderAnnotationLayer={false} />
              </Document>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </>
  );
}

export default FlipBook;
