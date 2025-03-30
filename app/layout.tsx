import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cool Electric',
  description: 'Cool Electric is the number one local residential electrical contractor on the Georgetown Divide and has been serving local residents since 2016.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
