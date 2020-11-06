import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <SEO title="Home" />
        <h1>Learn to design and code React apps</h1>
        <p>Complete courses about the best tools and guides to learn React and React native</p>
        <Link to="/page-2/">go to other page</Link> <br />
      </div>
    </div>
  </Layout>
)

export default IndexPage
