import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleExpeditedFreight"
import ExpeditedFright from "@/components/sections/Expedited-Fright"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Expedited Freight" />
    <ExpeditedFright />
    </Layout>
    </>
    )
}