import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleCrossDocking"
import CrossDocking from "@/components/sections/Cross-Docking"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Cross Docking" />
    <CrossDocking />
    </Layout>
    </>
    )
}