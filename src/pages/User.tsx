import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function User() {
    let { username } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <div>
                <p>Username is {username} </p>
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )

}

export default User;