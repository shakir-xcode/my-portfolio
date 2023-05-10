import * as React from "react"
import Layout from "../components/Layout"
import HeroSection from "../components/hero-section/HeroSection"

const IndexPage = () => {
  return (
    <Layout>
      <main className="relative  h-[100vh]">
        <div className=" absolute top-[15%] left-[10%]">
          <HeroSection />
        </div>

      </main>
    </Layout>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
