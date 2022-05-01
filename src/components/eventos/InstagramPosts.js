import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InstagramEmbed from 'react-instagram-embed';
import { instagram } from 'instagram-scraper-api';

const InstagramPosts = () => {

  const [posts, setPosts] = useState([]);

  const accessToken = "1232232860643084|02395ad4c467ccc63c70e4b56b0beb29"

  useEffect(async () => {
    const res = await axios.get('https://emprende-backend.herokuapp.com/');
    const codes = res.data.edge_owner_to_timeline_media.edges.map(edge => edge.node.shortcode);
    setPosts([codes[0], codes[1], codes[2]]);

  }, [])

  return (
    <div className="instagram-posts">
      <div className="container">
        {
          posts.map(post => (
            <InstagramEmbed
              url={`https://instagr.am/p/${post}`}
              clientAccessToken={accessToken}
              maxWidth={320}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => { }}
              onSuccess={() => { }}
              onAfterRender={() => { }}
              onFailure={() => { }}
            />
          ))
        }
      </div>
    </div>
  )
}

export default InstagramPosts;