import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItem = (props) => {
  const { liveSiteUrl, projectName, techStack, projectThumbnail } = props.portfolioData.projectDetails;
  const { content } = props.portfolioData;
  const thumbnail = getImage(projectThumbnail.localFile);

  return (
    <div className="border-4 border-white-600 p-8 mb-8 mt-8 md:mr-8 w-full md:w-6/12">
      <h4 className="font-bold">{projectName}</h4>
      <div className="p-4">
        <GatsbyImage image={thumbnail} alt={projectName} />
      </div>
      <div className="mb-8">
        <p><span className="font-bold">Site Url:</span> <a href={liveSiteUrl} target="_blank" rel="noreferrer">{liveSiteUrl}</a></p>
        <p><span className="font-bold">Tech Stack:</span> {techStack}</p>
      </div>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  )
}

export default PortfolioItem;
