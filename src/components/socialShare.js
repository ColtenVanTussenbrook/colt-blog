import React from 'react';

const SocialShare = (props) => {
  let siteUrl = 'https://coltenv.com/post' + props.data.slug;
    return (
      <div className="border-2 border-white p-4 w-6/12">
        <p>If you enjoyed this post, please share it!</p>
        <a
          target="_blank"
          rel="noreferrer"  
          class="twitter-share-button"
          href={"https://twitter.com/intent/tweet?text=" + props.data.title + " " + siteUrl + ""}
          data-size="large">Twitter</a>
        <div 
          class="fb-share-button" 
          data-href="https://developers.facebook.com/docs/plugins/" 
          data-layout="button" data-size="small">
        <a 
          target="_blank"
          rel="noreferrer" 
          href={"https://www.facebook.com/sharer/sharer.php?u=" + siteUrl + ""} 
          class="fb-xfbml-parse-ignore">Facebook</a></div>
      </div>
    )  

}

export default SocialShare;
