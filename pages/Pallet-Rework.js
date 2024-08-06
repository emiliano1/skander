import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitlePalletRework"
import PalletRework from "@/components/sections/Pallet-Rework"
export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Pallet Rework" />
    <PalletRework />
    </Layout>
    </>
    )
}