// app/components/ui/PDFModal.tsx
"use client";

import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import Loader from "./Loader";

// CORRECT CSS IMPORTS
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up the worker for react-pdf (Required)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFModalProps {
  activeDoc: string;
  onClose: () => void;
}

export default function PDFModal({ activeDoc, onClose }: PDFModalProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-corporate-navy/95 backdrop-blur-md flex flex-col">
      {/* Top Bar - Controls and Close Button */}
      <div className="flex justify-between items-center p-4 md:p-6 flex-shrink-0 w-full max-w-4xl mx-auto z-10 pt-[max(env(safe-area-inset-top),1rem)]">
        
        {/* Pagination Controls */}
        <div className="flex items-center gap-4 bg-white/10 px-4 py-2 rounded-full text-white backdrop-blur-sm">
          <button 
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((prev) => prev - 1)}
            className="disabled:opacity-30 hover:text-corporate-red transition-colors"
          >
            <FaChevronLeft />
          </button>
          <span className="text-sm font-medium">
            {numPages ? `${pageNumber} of ${numPages}` : "..."}
          </span>
          <button 
            disabled={pageNumber >= (numPages || 1)}
            onClick={() => setPageNumber((prev) => prev + 1)}
            className="disabled:opacity-30 hover:text-corporate-red transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>

        <button 
          onClick={onClose}
          className="bg-corporate-red hover:bg-red-700 text-white p-3 md:p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
          aria-label="Close document"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      {/* Document Container */}
      <div className="flex-grow w-full max-w-4xl mx-auto px-4 pb-6 md:px-6 md:pb-8 flex items-start justify-center overflow-y-auto overflow-x-hidden custom-scrollbar">
        <div className="relative shadow-2xl ring-4 ring-white/10 bg-white rounded-lg min-h-[50vh] flex items-center justify-center min-w-full md:min-w-0">
          
          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100 rounded-lg">
              <Loader text="Rendering PDF..." />
            </div>
          )}

          <Document
            file={activeDoc}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={null}
            className="max-w-full overflow-hidden flex justify-center"
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={true} 
              renderAnnotationLayer={true}
              className="max-w-full"
              width={typeof window !== "undefined" ? Math.min(window.innerWidth - 48, 800) : 800} 
            />
          </Document>
        </div>
      </div>
    </div>
  );
}