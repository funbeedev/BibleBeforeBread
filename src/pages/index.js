import React from "react"
import Layout from "../components/layout"
import Form from "../components/form"
import line from "../../static/img/line.png"
import form_image from "../../static/img/bible-1920x1080.png"

import Helmet from "react-helmet"
import VantaCloudsAnimation from "../components/vanta-animation"

import "../style/index.scss"

const Home = () => (

  <Layout>

    <div class="home-logo" />

    {/* add vanta animation, is helmet needed? */}
    <Helmet>
        <script src="../../static/three.r119.min.js"></script>
        <script src="../../static/vanta.clouds.min.js"></script>
    </Helmet>      
    <VantaCloudsAnimation>
        <div class="home-quote">
          <blockquote> "Man shall not live by bread alone, but by every word that comes from the mouth of God."</blockquote>
          <img src={line} className="quote-line" alt="Logo" />
          <p class="quote-verse">- Matthew 4:4</p>
        </div>  
    </VantaCloudsAnimation>

    <div className="form-container">
      <Form />
      <img class="form-image" src={form_image} alt="" />
    </div>

  </Layout>
  
  
)

export default Home
