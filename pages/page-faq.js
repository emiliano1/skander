import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Faq4 from "@/components/sections/Faq4"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="FAQ" />
    <Faq4 />
    </Layout>
    </>
  )
}