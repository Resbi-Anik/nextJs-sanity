import React, { useEffect, useState } from "react";
import sanityClient from "../client";

function about() {
  const [about, setAbout] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "About-Us"]{
            Description,
              }`
      )
      .then((data) => setAbout(data))
      .catch(console.err);
  }, []);
  return (
    <div>
      From cms :
      {about && about.map((data,index)=>(<div>{data.Description}</div>))}
    </div>
  );
}

export default about;
