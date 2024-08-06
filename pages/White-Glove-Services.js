import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleWhiteGlove"
import White from "@/components/sections/White-Glove-Services"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="White Glove Services" />
    <White />
    </Layout>
    </>
    )
}