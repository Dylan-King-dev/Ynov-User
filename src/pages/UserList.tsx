import { Link } from "react-router-dom";


function UserList() {
    const USERS = [
        {
            "first_name": "Harry",
            "last_name": "Potter",
        },
        {
            "first_name": "Ron",
            "last_name": "Weasley",
        },
        {
            "first_name": "Hermione",
            "last_name": "Granger",
        },
    ];

    return (
        <>
            {USERS.map((user) => (
                <div>
                    <Link to={`/user/${user.first_name}`}><p>name: {user.first_name}</p></Link>
                    <p>last name: {user.last_name}</p>
                </div>
                )   
            )
            }
        </>
    )
}

export default UserList;