import './globals.css'

export const metadata = {
  title: 'SS CREATION | Corporate Interior Fit-Out',
  description: 'Corporate turnkey interior contractor based in Kolkata',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
