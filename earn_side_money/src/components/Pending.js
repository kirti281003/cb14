import Content from "./Contentcard.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Freelancing.css";
function Pending()
{ const [post, setPost] = useState([]);
    const fetchData = () => {
        return axios.get("/allpost")
              .then((response) => 
              setPost(response.data.posts));}
              
    
      useEffect(() => {
        fetchData();
      },[]);
     return(
        <>
            <h1> Pending Request</h1>
            <div class="container">
            {post.map(post => (
    <Content heading={post.category} content={post.body} name={post.postedBy}/>
    ))}
    </div>
        </>
     )


}
export default Pending;