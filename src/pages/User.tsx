import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import data from "../data/users.json"
import "../style/User.css"

function User() {
    const { id } = useParams();
    const navigate = useNavigate();

    const user = data.users.find((user) => String(user.id) === id);

    return (
        <>
            <main className="user-page" key={user?.id}>
                    <h2>{user?.firstName} {user?.lastName}</h2>
                    <img className="user-detail-image" src={user?.image} alt={user?.firstName} />
                    <br />
                    <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            </main>
        </>
    )

}

export default User;