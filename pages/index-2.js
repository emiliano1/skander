import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/Banner"
import About2 from "@/components/sections/About2"
import Faq2 from "@/components/sections/Faq2"
import Features2 from "@/components/sections/Features2"
import Funfact2 from "@/components/sections/Funfact2"
import News1 from "@/components/sections/News1"
import Projects2 from "@/components/sections/Projects2"
import Services2 from "@/components/sections/Services2"
import Testimonial2 from "@/components/sections/Testimonial2"
import Video from "@/components/sections/Video"
import WhyChooseUs2 from "@/components/sections/WhyChooseUs2"
import WorkProcess from "@/components/sections/WorkProcess"
export default function Home2() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={2}>
    <Banner />
    <About2 />
    <Services2 />
    <Video />
    <WhyChooseUs2 />
    <Features2 />
    <WorkProcess />
    <Projects2 />
    <Funfact2 />
    <Faq2 />
    <Testimonial2 />
    <News1 />
    </Layout>
    </>
    )
}