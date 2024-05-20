import { About } from '@/components/About'
import { CaseStories } from '@/components/CaseStories'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { SellingSection } from '@/components/SellingSection'
import { Services } from '@/components/Services'
import { Testimonial } from '@/components/Testimonial'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className=' w-full flex flex-col justify-center items-center max-w-[350px] md:max-w-[760px] lg:max-w-[1440px]'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <CaseStories/>
      <Testimonial/>
      <SellingSection/>
      <Footer/>
      <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </main>
  )
}
