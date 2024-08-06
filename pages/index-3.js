import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Funfact3 from "@/components/sections/Funfact3"
import Services3 from "@/components/sections/Services3"
import WhyChooseUs3 from "@/components/sections/WhyChooseUs3"
import Projects3 from "@/components/sections/Projects3"
import Team from "@/components/sections/Team"
import Faq3 from "@/components/sections/Faq3"
import Features3 from "@/components/sections/Features3"
import Testimonial1 from "@/components/sections/Testimonial1"
import News1 from "@/components/sections/News1"
import Banner2 from "@/components/sections/Banner2"
export default function Home3() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <Banner2 />
    <Services3 />
    <About3 />
    <Projects3 />
    <Funfact3 />
    <WhyChooseUs3 />
    <Team />
    <Features3 />
    <Testimonial1 />
    <Faq3 />
    <News1 />
    </Layout>
    </>
    )
}