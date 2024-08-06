import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleSameDayCourier"
import SameDay from "@/components/sections/Same-Day-Courier"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Same Day Courier Services" />
    <SameDay />
    </Layout>
    </>
    )
}