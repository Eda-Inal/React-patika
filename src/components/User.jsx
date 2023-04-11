import {useParams, Link} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from 'axios'
function User() {
  const [user,setUser] = useState({})
  const [isLoading, setIsloading] = useState(true)
    const {id} = useParams();
    useEffect(() => {
axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => setUser(res.data)).finally(() => setIsloading(false))

    }
    ,[id] )
  return (
    <div>
     <h2>User Details</h2>
    {isLoading && <div>...Loading</div> }

{!isLoading &&<code> {JSON.stringify(user)}</code>} <br /> <br />

  <Link to={`/user/${parseInt(id) + 1}`}>Next user ({parseInt(id) + 1})</Link>



    </div>
  )
}

export default User
