import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleCrossBorder"
import CrossBorder from "@/components/sections/Cross-Border"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Cross Border Services" />
    <CrossBorder />
    </Layout>
    </>
    )
}