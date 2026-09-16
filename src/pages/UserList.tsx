import { Link } from "react-router-dom";
import data from "../data/users.json"
import { useNavigate } from "react-router-dom";
import "../style/UserList.css";


function UserList() {
    const navigate = useNavigate();

    if (!data || !data.users) {
        navigate("/Error");
    }

    return (
        <>
            <main className="page-content">
               <h1>Users</h1>
                <section id="center" className="user-grid">
                {data.users.map((user) => (
                    <article className="user-card" key={user.id}>
                        <Link to={`/user/${user.id}`}><img className="user-image" src={user.image} alt={user.firstName} /></Link>
                        <p>{user.firstName} {user.lastName}</p>
                        <span>@{user.username}</span>
                    </article>
                ))}
                </section>
            </main>
        </>
    )
}

export default UserList;