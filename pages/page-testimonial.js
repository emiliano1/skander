import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Testimonial" />
    <Testimonial3 />
    </Layout>
    </>
  )
}