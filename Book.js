import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function Book() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
  }, []);

  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h2>{data.id}-
            {data.title} by {data.author}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Book;