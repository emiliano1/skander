import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Funfact2 from "@/components/sections/Funfact2"
import Services1 from "@/components/sections/Services1"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Projects1 from "@/components/sections/Projects1"
import Faq from "@/components/sections/Faq"
import Features from "@/components/sections/Features"
import Form from "@/components/sections/Form"
import Slider1 from "@/components/sections/Slider1"
import About2 from "@/components/sections/About2"
export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
    <Slider1 />
    <Services1 />
    <About1 />
    <Funfact2 />
    <WhyChooseUs />
    <Projects1 />
    <Faq />
    <Features />
    <Form />
    </Layout>
    )
}