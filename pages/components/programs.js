import React, { useEffect, useState } from "react";
import sanityClient from "../../client";

function programs() {
  const [programs, setPrograms] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "Programs"]{
              Description,
                }`
      )
      .then((data) => setPrograms(data))
      .catch(console.err);
  }, []);
  return (
    <div>
      From cms :
      {programs && programs.map((data, index) => <div>{data.Description}</div>)}
    </div>
  );
}

export default programs;
