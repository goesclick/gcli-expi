import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Goes.CLiCK" />
    <p className="d">
      omitGoogleFont (boolean, default: false): By default, Typography includes
      a helper that makes a request to Google Font’s CDN for fonts you need. You
      may want to use your own fonts, either by injecting fonts or using a CDN
      of your choosing. By setting omitGoogleFont: true,
      gatsby-plugin-typography will skip adding the font helper. Instead, you
      will have to include the appropriate fonts yourself - see Adding a Local
      Font
    </p>
    <p className="ssp">
      omitGoogleFont (boolean, default: false): By default, Typography includes
      a helper that makes a request to Google Font’s CDN for fonts you need. You
      may want to use your own fonts, either by injecting fonts or using a CDN
      of your choosing. By setting omitGoogleFont: true,
      gatsby-plugin-typography will skip adding the font helper. Instead, you
      will have to include the appropriate fonts yourself - see Adding a Local
      Font
    </p>
    <p className="zs">
      omitGoogleFont (boolean, default: false): By default, Typography includes
      a helper that makes a request to Google Font’s CDN for fonts you need. You
      may want to use your own fonts, either by injecting fonts or using a CDN
      of your choosing. By setting omitGoogleFont: true,
      gatsby-plugin-typography will skip adding the font helper. Instead, you
      will have to include the appropriate fonts yourself - see Adding a Local
      Font
    </p>
    <p>Now go build something great.</p>
    <h1>Goes.CLiCK</h1>
    <h2>Goes.CLiCK</h2>
    <h3>Goes.CLiCK</h3>
    <h4>Goes.CLiCK</h4>
    <h5>Goes.CLiCK</h5>
    <h6>Goes.CLiCK</h6>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
