import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11433484632"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11433484632');
            `,
          }}
          
        />
      </Head>
     
      <body className='w-full text-gray-200 bg-[#08081B] flex flex-col justify-center items-center ' >{children}</body>
    </html>
  )
}
