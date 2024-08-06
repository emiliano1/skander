import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Error from "@/components/sections/Error"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="404" />
    <Error />
    </Layout>
    </>
  )
}