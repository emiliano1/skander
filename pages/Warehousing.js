import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleWarehousing"
import Warehousing from "@/components/sections/Warehousing"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Warehouse Services" />
    <Warehousing />
    </Layout>
    </>
    )
}