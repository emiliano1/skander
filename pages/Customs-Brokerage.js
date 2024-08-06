import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleCustomsBrokerage"
import CustomsBrokerage from "@/components/sections/Customs-Brokerage"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Customs Brokerage" />
    <CustomsBrokerage />
    </Layout>
    </>
    )
}