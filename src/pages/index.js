import React from "react";
import Layout from "../components/layout";
import SocialLinks from "../components/socialLinks";
import SEO from "../components/seo";
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <SEO title="Colten Van Tussenbrook" />
    <div className="md:flex flex-row items-center pt-4 lg:pt-24">
      <div className="pers-info md:w-4/5 md:border-r-4 md:pr-8 border-white">
        <h1 className="text-gray-500 text-4xl">Hi, I'm</h1>
        <h1 className="text-5xl md:text-7xl lg:text-9xl text-white mb-10">Colten<span className="md:hidden"><br></br></span><span className="text-gray-500"><span className="md:hidden"></span> Van Tussenbrook</span></h1>
        <p className="text-xl md:text-3xl mb-10">I'm a software engineer in <span className="text-gray-500">Salt Lake City</span>. I build modern apps and websites using JavaScript.</p>
        <Link to={"/portfolio"} className="text-lg md:text-xl">View my portfolio</Link>
      </div>
      <div className="pers-links w-full md:w-1/5 mt-8 md:mt-0 text-center">
        <SocialLinks display={"block"} />
      </div>
    </div>
  </Layout>
)

export default IndexPage;
