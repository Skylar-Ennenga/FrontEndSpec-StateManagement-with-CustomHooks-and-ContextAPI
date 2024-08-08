import { useEffect, useState } from "react";
import axios from "axios";

export const usePosts = () => {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);

      }
    };
    fetchData();
  }, []); 

  return { posts }; 
};