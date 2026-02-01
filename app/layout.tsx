import type { ReactNode } from 'react'

export const metadata = {
  title: 'SS CREATION | Corporate Interior Fit-Out',
  description: 'End-to-end corporate interior fit-out contractor based in Kolkata'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

