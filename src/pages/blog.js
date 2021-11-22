import React from 'react';
import PostPreview from '../components/postPreview';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const Blog = ({ data }) => (
    <Layout>
    <SEO title="Blog" />
    <div className="pt-6 md:pt-12">
      <h1 className="page-heading">Blog</h1>
      {data.allWpPost.edges.map(post => {
            return (
                <div key={post.node.id}>
                <PostPreview postInfo={post.node} />
                </div>
            );
        })}
    </div>
    </Layout>
)

export default Blog;

export const query = graphql`
  query {
    allWpPost {
        edges {
            node {
                id
                content
                date
                slug
                title
            }
        }
    }
  }
`