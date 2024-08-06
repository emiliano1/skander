import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleConsolidation"
import Consolidation from "@/components/sections/Consolidation"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Consolidation" />
    <Consolidation />
    </Layout>
    </>
    )
}