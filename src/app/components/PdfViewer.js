'use client';

import { useState } from 'react';

export default function PdfViewer() {
  const [isOpen, setIsOpen] = useState(false);

  const openPdf = () => setIsOpen(true);
  const closePdf = () => setIsOpen(false);

  return (
    <>
      {/* Small PDF preview thumbnail */}
      <div 
        onClick={openPdf}
        className="pdf-preview-container"
        style={{
          width: '150px',
          maxWidth: '25vw',
          height: 'auto',
          aspectRatio: '3/4',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          flexShrink: 0,
          position: 'relative',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <iframe
          src="/Elisha professional resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitV&zoom=50"
          style={{
            width: '200%',
            height: '200%',
            border: 'none',
            pointerEvents: 'none',
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0.8)',
          }}
          title="Resume preview"
        />
      </div>

      {/* Modal overlay when PDF is opened */}
      {isOpen && (
        <div
          onClick={closePdf}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '75vw',
              height: '90vh',
              maxWidth: '1200px',
              backgroundColor: '#fff',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            <iframe
              src="/Elisha professional resume.pdf"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title="Resume full view"
            />
          </div>
        </div>
      )}
    </>
  );
}
