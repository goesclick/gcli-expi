import React from "react"
import { Link } from "gatsby"

// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <section>
    <SEO title="Goes.CLiCK" />
    {/* <div className="radial-menu"></div> */}
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/blog/">Go to my blog</Link> <br />
    <Link to="/about/">Go to my about page</Link> <br />
    <Link to="/contact/">Go to my contact page</Link> <br />
    <Link to="/404/">404</Link> <br />
    <section></section>
    <h1>Goes.CLiCK</h1>
    <p>
      omitGoogleFont (boolean, default: false): By default, Typography includes
      a helper that makes a request to Google Font’s CDN for fonts you need. You
      may want to use your own fonts, either by injecting fonts or using a CDN
      of your choosing. By setting omitGoogleFont: true,
      gatsby-plugin-typography will skip adding the font helper. Instead, you
      will have to include the appropriate fonts yourself - see Adding a Local
      Font
    </p>
    <section>
      <h2>Goes.CLiCK</h2>
      <p>
        omitGoogleFont (boolean, default: false): By default, Typography
        includes a helper that makes a request to Google Font’s CDN for fonts
        you need. You may want to use your own fonts, either by injecting fonts
        or using a CDN of your choosing. By setting omitGoogleFont: true,
        gatsby-plugin-typography will skip adding the font helper. Instead, you
        will have to include the appropriate fonts yourself - see Adding a Local
        Font
      </p>
    </section>
    <section>
      <h3>And more information...</h3>
      <p>
        omitGoogleFont (boolean, default: false): By default, Typography
        includes a helper that makes a request to Google Font’s CDN for fonts
        you need. You may want to use your own fonts, either by injecting fonts
        or using a CDN of your choosing. By setting omitGoogleFont: true,
        gatsby-plugin-typography will skip adding the font helper. Instead, you
        will have to include the appropriate fonts yourself - see Adding a Local
        Font
      </p>
    </section>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </section>
)

export default IndexPage
