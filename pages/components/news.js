import React, { useEffect, useState } from "react";
import sanityClient from "../client";
function news() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "News"]{
                      Description,News{
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
      This data come from News :
      {post &&
        post.map((data, index) => (
          <div key={index}>
            <div>Text data : {data.Description}</div>
            <img src={data.News.asset.url} />
          </div>
        ))}
    </div>
  );
}

export default news;
