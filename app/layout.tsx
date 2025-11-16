import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AudioSense - Intelligent Audio Analysis & Enhancement',
  description: 'Upload audio, understand its structure, and enhance it with AI-powered controls.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
