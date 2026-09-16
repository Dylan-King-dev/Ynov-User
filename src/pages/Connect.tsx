import data from "../data/users.json"
import { type FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../style/Connect.css"

function Connect() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const user = data.users.find((user)=> user.username === username && user.password === password);
        if (user) {
            navigate(`/profile/${user.id}`);
        } else {
            setState("No Buenos");
        }
    }

    return (
        <main className="page-content form-page">
            <h1>Connect</h1>
            <form className="connect-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Connect</button>
            </form>
            {state && <p className="form-message">{state}</p>}
        </main>
    )
}

export default Connect;