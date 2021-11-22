import React from "react";
import SocialLinks from "../components/socialLinks";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const Portfolio = ({ data }) => (
    
  <Layout>
    <SEO title="Portfolio" />
    <div className="pt-6 md:pt-12">
      <h1 className="page-heading" dangerouslySetInnerHTML={{__html: data.wpPage.title}} />
      <div className="flex-col md:flex-row flex">
        <div className="text-2xl md:text-3xl mb-10 text-block md:pr-12" dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
      </div>
      
    </div>
    <div>
      <SocialLinks display={"inline-block"}/>
    </div>
  </Layout>
)

export default Portfolio;

export const query = graphql`
  query {
    wpPage(slug: { eq: "portfolio" }) {
        title
        content
    }
  }
`
