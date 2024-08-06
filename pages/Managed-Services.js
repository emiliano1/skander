import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitleManagedServices"
import ManagedServices from "@/components/sections/Managed-Services"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Managed Services" />
    <ManagedServices />
    </Layout>
    </>
    )
}