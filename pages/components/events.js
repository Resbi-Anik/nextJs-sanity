
import React, { useEffect, useState } from "react";
import sanityClient from "../client";


function Events() {
    const [events, setEvents] = useState(null);
    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "Events"]{
              Description,
                }`
        )
        .then((data) => setEvents(data))
        .catch(console.err);
    }, []);
    return (
      <div>
        From cms :
        {events && events.map((data,index)=>(<div>{data.Description}</div>))}
      </div>
    );
}

export default Events
