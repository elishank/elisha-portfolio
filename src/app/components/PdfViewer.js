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
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 'clamp(2rem, 8vw, 4rem)',
            cursor: 'pointer',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '900px',
              maxHeight: '85vh',
              backgroundColor: '#333',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'default',
            }}
          >
            <button
              onClick={closePdf}
              style={{
                alignSelf: 'flex-end',
                background: '#333',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                fontSize: '1.2rem',
                cursor: 'pointer',
                zIndex: 10000,
              }}
              aria-label="Close PDF"
            >
              ✕
            </button>
            <iframe
              src="/Elisha professional resume.pdf"
              style={{
                width: '100%',
                flex: 1,
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
