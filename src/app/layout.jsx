import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Buku Nomor',
    default: 'Buku Nomor - Simpan nomor penting kamu di satu tempat',
  },
  description:
    'Buku Nomor adalah aplikasi fungsional yang memungkinkan kamu menyimpan nomor penting kamu di satu tempat. Gak perlu lagi buka dompet, buka banyak aplikasi, atau cari-cari nomor penting kamu.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
