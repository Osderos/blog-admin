import React, { useState, useEffect } from "react";
import { getAuthors } from "../utils/api_requests";

function Authors() {
  const [authorsList, setAuthorsList] = useState([]);
  
  useEffect(() => {
    console.log("Authors component did mount");
    const loadAuthors = async () => {
      setAuthorsList(await getAuthors());
    };
    loadAuthors();
  }, []);
  return (
    <div>
      <ol>
        {authorsList.map((elem) => (
          <li key={elem._id}>{elem.username}</li>
        ))}
      </ol>
    </div>
  );
}

export default Authors;
