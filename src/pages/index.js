import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <SEO title="Home" />
        <h1>¡Arrienda tu lote para construir glampings!</h1>
        <p>
          Unete a la revloución del turismo ecologico y se host global de los
          amantes de la naturaleza
        </p>
        <Link to="/page-2/">quiero registrarme</Link> <br />
      </div>
    </div>
    <div className="Section">

    </div>
    <div className="Hero2">
      <div className="HeroGroup">
        <SEO title="Home" />
        <h1>¡Arrienda tu lote para construir glampings!</h1>
        <p>
          Unete a la revloución del turismo ecologico y se host global de los
          amantes de la naturaleza
        </p>
        <Link to="/page-2/">quiero registrarme</Link> <br />
      </div>
    </div>
  </Layout>
)

export default IndexPage
