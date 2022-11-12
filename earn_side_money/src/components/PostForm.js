import {Link} from "react-router-dom";
import {useState} from "react";
import {useParams} from "react-router-dom";

function PostForm()
{const {id,token}=useParams();
console.log(token);
    const[post,setPost]=useState({category:"",post:""});
    let name,value;
    const handlePost=(e)=>{
      e.preventDefault();
      name=e.target.name;
      value=e.target.value;
      setPost({...post,[name]:value});
      console.log(e);
    }
    const postRequest=async(e)=>{
        e.preventDefault();
        const{category,body}=post;
       const res=await fetch("/createpost",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":token
          
        },
        body:JSON.stringify({
          category:category,body:body
        })
    
       });
       const response=await res.json();
       if(res.status===422 )
       {
        window.alert("Inavlid");
        console.log("Invalid");
       }
       else{
        window.alert("Success");
        console.log("Success");
        
    
    
       }
    
      }
    return(
        <>
             <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Create Post</h3>
            <div className="google-login">
            </div>
            <div className="form-group mt-3">
              <label>Category</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Category Of Work"
                name="category"
                value={post.category}
                onChange={handlePost}
              />
            </div>
            <div className="form-group mt-3">
              <label>Body</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter the body"
                name="body"
                value={post.body}
                onChange={handlePost}
              />
            </div>
            <div className="login-button d-grid gap-2 mt-3 mb-3">
            <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true" onClick={postRequest} >
                POST
                </button>
            </div>
          </div>
        </form>
      </div>
        </>
    )
}
export default PostForm;