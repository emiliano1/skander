import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleReversedLogistics"
import ReverseLogistics from "@/components/sections/Reverse-Logistics"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Reverse Logistics" />
    <ReverseLogistics />
    </Layout>
    </>
    )
}