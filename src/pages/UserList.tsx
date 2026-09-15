import { Link } from "react-router-dom";
import data from "../data/users.json"


function UserList() {

    return (
        <>
            {data.users.map((user) => (
                <div key={user.id}>
                    <p>name: {user.firstName}</p>
                    <p>last name: {user.lastName}</p>
                    <Link to={`/user/${user.username}`}><p>See account</p></Link>
                </div>
            ))}
        </>
    )
}

export default UserList;