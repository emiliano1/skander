import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Team from "@/components/sections/Team"
import Video from "@/components/sections/Video"
import Funfact2 from "@/components/sections/Funfact2"
import NewsDetails from "@/components/sections/NewsDetails"

export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <Team/>
    <NewsDetails/>
    <Funfact2/>
    <Video/>
    </Layout>
    </>
    )
}