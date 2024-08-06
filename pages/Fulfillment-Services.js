import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleFulfillmentServices"
import FulfillmentServices from "@/components/sections/Fulfillment-Services"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Fulfillment Services" />
    <FulfillmentServices />
    </Layout>
    </>
    )
}