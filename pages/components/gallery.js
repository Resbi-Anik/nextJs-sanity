import React, { useEffect, useState } from "react";
import sanityClient from "../client";
function gallery() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "Gallery"]{
                    Description{
                        asset->{
                            url
                        }
                    }
                
                  }`
      )
      .then((data) => setPost(data))
      .catch(console.err);
  }, []);
  return (
    <div>
      From cms :
      {post &&
        post.map((data, index) => (
          <div key={index}><img src={data.Description.asset.url}/></div>
        ))}
    </div>
  );
}

export default gallery;
