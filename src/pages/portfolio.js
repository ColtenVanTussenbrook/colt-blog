import React from "react";
import SocialLinks from "../components/socialLinks";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import PortfolioItem from "../components/portfolioItem";

const Portfolio = ({ data }) => {
  let portfolioItems = data.allWpPortfolio.nodes;

  return (
    <Layout>
        <SEO title="Portfolio" />
        <div className="pt-6 md:pt-12">
          <h1 className="page-heading" dangerouslySetInnerHTML={{__html: data.wpPage.title}} />
          <div className="flex-col md:flex-row flex">
            <div className="text-2xl md:text-3xl text-block md:pr-12" dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
          </div>
          <div className="flex flex-col md:flex-row">
            {
              portfolioItems.map(item => {
                return <PortfolioItem key={item.id} portfolioData={item}/>
              })
            }
          </div>
        </div>
        <div>
          <SocialLinks display={"inline-block"}/>
        </div>
      </Layout>
  )
}

export default Portfolio;

export const query = graphql`
  query {
    wpPage(slug: { eq: "portfolio" }) {
        title
        content
    }
    allWpPortfolio {
      nodes {
        id
        content
        projectDetails {
          projectName
          liveSiteUrl
          techStack
          projectThumbnail {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                )
              }
            }
          }  
        }
      }
    }
  }
`
