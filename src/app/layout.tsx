import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Página de Prueba',
  description: 'Una página simple para testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}