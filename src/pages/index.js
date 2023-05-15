import * as React from "react"
import Layout from "../components/Layout"
import HeroSection from "../components/hero-section/HeroSection"


const IndexPage = () => {
  return (
    <Layout>
      <main className="">
        <HeroSection />
      </main>
    </Layout>
  )
}
export default IndexPage

// export const Head = () => <title>Home Page</title>
