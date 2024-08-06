import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleLogistics"
import ServiceGrid from "@/components/sections/ServiceGrid"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Logistics" />
    <ServiceGrid />
    </Layout>
    </>
    )
}