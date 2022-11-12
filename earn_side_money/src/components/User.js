import { useParams} from "react-router-dom";
import {Link} from "react-router-dom";
function User()
{ const {id,token}=useParams();
console.log({id})
    return(
        <>
       
        <h1> Hi {id} </h1>
        <Link to={"/createpost/"+id+"/"+token}>Create Post</Link><br></br>
        <Link to={"/mypost/"+id+"/"+token}>My Posts</Link>
    

        </>
    )
}
export default User;