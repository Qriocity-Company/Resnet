import type { Metadata } from 'next'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full text-gray-200 bg-[#08081B] flex flex-col justify-center items-center ' >{children}</body>
    </html>
  )
}
