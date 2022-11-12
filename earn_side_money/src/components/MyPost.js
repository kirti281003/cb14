import Content from "./Contentcard.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Freelancing.css";
import {useParams} from "react-router-dom";
function MyPost()
{ 
    const {id,token}=useParams();
    const [mypost, setPost] = useState([]);
    const myposts=async()=>
    {
      
        const res= await fetch("/mypost",{
            method:"GET",
            headers:{
              "Content-Type":"application/json",
              "Authorization":token
              
            },
           });
           const response= await res.json();
           setPost(response.mypost);
    }
    myposts();
 
    
    return(
         <>
            <h1> MY POSTS</h1>
            <div class="container">
            {mypost.map(mypost => (
    <Content heading={mypost.category} content={mypost.body} name={mypost.postedBy}/>
    ))}
    </div>

        </>
    )
}
export default MyPost;