import BlogHero from '@/components/BlogHero'
import { Navbar } from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <main className=' w-full flex flex-col justify-center items-center max-w-[350px] md:max-w-[760px] lg:max-w-[1440px] overflow-hidden'>
    <Navbar/>
    <BlogHero/>
  </main>
  )
}

export default Page