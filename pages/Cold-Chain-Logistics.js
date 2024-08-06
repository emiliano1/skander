import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleColdChainLogistics"
import ColdChainLogistics from "@/components/sections/Cold-Chain-Logistics"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Cold Chain Logistics" />
    <ColdChainLogistics />
    </Layout>
    </>
    )
}