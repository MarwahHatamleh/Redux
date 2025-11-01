import React, { use, useEffect, useState } from "react";
import axios from "axios";

export default function Counter() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const GetPosts = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        
        setPosts(res.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    GetPosts();
  }, []);
  // const post = use(GetPosts())
  // console.log(post)
  // const user = use(getUser);
  return (
    <>
      <h1>{posts[0]?.title}</h1>
    </>
  );
}
