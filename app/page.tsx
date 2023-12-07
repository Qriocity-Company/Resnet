import { About } from '@/components/About'
import { CaseStories } from '@/components/CaseStories'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { SellingSection } from '@/components/SellingSection'
import { Services } from '@/components/Services'
import { Testimonial } from '@/components/Testimonial'

export default function Home() {
  return (
    <main className=' w-full flex flex-col justify-center items-center max-w-[350px] md:max-w-[760px] lg:max-w-[1440px]'>
      <Navbar/>
      <Hero/>
      {/* <Services/> */}
      <About/>
      <CaseStories/>
      <Testimonial/>
      <SellingSection/>
      <Footer/>
    </main>
  )
}
