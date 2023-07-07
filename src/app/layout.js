import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trafalgar: Centro Médico',
  description: 'Centro Medico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel='icon' href='/favicon.png'  />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
