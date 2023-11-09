import './globals.css'

export const metadata = {
  title: 'Szimonetta Sipos Chapron Portfolio',
  description: 'Developpeur Web Fullstack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
