import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleFirstMile"
import Mile from "@/components/sections/Mile"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="First And Final Mile" />
    <Mile />
    </Layout>
    </>
    )
}