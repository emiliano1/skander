import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleCustomSolutions"
import CustomizedSolutions from "@/components/sections/Customized-Solutions"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Customized Solutions" />
    <CustomizedSolutions />
    </Layout>
    </>
    )
}