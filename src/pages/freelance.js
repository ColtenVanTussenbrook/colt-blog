import React from "react";
import SocialLinks from "../components/socialLinks";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const Freelance = ({ data }) => (
    
  <Layout>
    <SEO title="Freelance" />
    <div className="pt-6 md:pt-12">
      <h1 className="page-heading" dangerouslySetInnerHTML={{__html: data.wordpressPage.title}} />
      <div className="flex-col md:flex-row flex">
        <div className="text-2xl md:text-3xl mb-10 text-block md:pr-12" dangerouslySetInnerHTML={{__html: data.wordpressPage.content}} />
      </div>
      
    </div>
    <div>
      <SocialLinks display={"inline-block"}/>
    </div>
  </Layout>
)

export default Freelance;

export const query = graphql`
  query {
    wpPage(slug: { eq: "freelance" }) {
        title
        content
    }
  }
`
