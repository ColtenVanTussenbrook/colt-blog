import React from "react";
import SocialLinks from "../components/socialLinks";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import me from '../assets/images/me-web.jpg';

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="pt-6 md:pt-12">
      <h1 className="page-heading" dangerouslySetInnerHTML={{__html: data.wpPage.title}} />
      <div className="flex-col md:flex-row flex">
        <div className="text-2xl md:text-3xl mb-10 text-block md:pr-12" dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
        <div className="w-12/12 md:w-6/12 m-0 mb-8 md:mb-0"><img src={me} alt="colten van tussenbrook" /></div>
      </div>
      
    </div>
    <div>
      <SocialLinks display={"inline-block"}/>
    </div>
  </Layout>
)

export default About;

export const query = graphql`
  query {
    wpPage(slug: { eq: "about" }) {
        title
        content
    }
  }
`
