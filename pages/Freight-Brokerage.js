import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleFreightBrokerage"
import FreightBrokerage from "@/components/sections/Freight-Brokerage"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Freight Brokerage" />
    <FreightBrokerage />
    </Layout>
    </>
    )
}