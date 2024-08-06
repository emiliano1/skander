import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Sustainability from "@/components/sections/Sustainability"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Sustainability" />
    <Sustainability />
    </Layout>
    </>
    )
}