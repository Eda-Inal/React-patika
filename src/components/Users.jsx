import {Link} from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState } from "react";


function Users() {

  const [users,setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
axios('https://jsonplaceholder.typicode.com/users')
.then((res )=> setUsers(res.data)).finally(() => setIsloading(false))
  }, [])
  return (
    <div>
      <h1>Users</h1>
  <ul>
 {isLoading && <div>...Loading</div> }
    {users.map((user) =>( 
      <li key={user.id}>
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </li>

    ))}

  </ul>
 
    </div>
  )
}

export default Users
