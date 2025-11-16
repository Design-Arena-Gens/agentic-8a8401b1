'use client'

import { useState } from 'react'

export default function Home() {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Handle file upload logic here
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">AudioSense</div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#analyze">Analyze Audio</a>
            <a href="#insights">Insights</a>
            <a href="#modify">Modify Audio</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="waveform-bg">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wavePattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0 100 Q50 50, 100 100 T200 100" fill="none" stroke="rgba(102, 126, 234, 0.3)" strokeWidth="2"/>
                <path d="M0 120 Q50 80, 100 120 T200 120" fill="none" stroke="rgba(118, 75, 162, 0.3)" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wavePattern)" />
          </svg>
        </div>
        <div className="container hero-content">
          <h1>Intelligent Audio Analysis<br />& Enhancement</h1>
          <p>Upload audio, understand its structure, and enhance it with AI-powered controls.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Upload Audio</button>
            <button className="btn-secondary">Try Demo</button>
          </div>

          {/* Waveform Visualization */}
          <div className="waveform">
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="upload-section" id="analyze">
        <div className="container">
          <div
            className="upload-card"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
              borderColor: isDragging ? 'rgba(102, 126, 234, 0.8)' : 'rgba(255, 255, 255, 0.1)',
              background: isDragging ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255, 255, 255, 0.03)'
            }}
          >
            <div className="upload-icon">🎵</div>
            <h3>Drop Your Audio File Here</h3>
            <p>Or click to browse and select from your device</p>

            <div className="format-tags">
              <span className="format-tag">.mp3</span>
              <span className="format-tag">.wav</span>
              <span className="format-tag">.flac</span>
              <span className="format-tag">.aac</span>
            </div>

            <button className="btn-primary">Analyze Audio</button>
          </div>
        </div>
      </section>
    </>
  )
}
