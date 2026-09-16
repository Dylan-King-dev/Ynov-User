import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import data from "../data/users.json"
import "../style/Profile.css"

function Profile() {
    let { id } = useParams();
    const navigate = useNavigate();

    if (!id) {
        navigate("/Error");
    }
    const dude = data.users.find((user)=> user.id === parseInt(String(id)));

    if (!dude) {
        navigate("/Error");
    }

    return (
        <>
            <div key={dude?.id} className="profile-container">
                {/* 1. Profile Header / Avatar */}
                <div className="profile-header">
                    <img id="image" src={dude?.image} alt={dude?.username} />
                    <h2>{dude?.firstName} {dude?.lastName}</h2>
                    <p className="role-tag">{dude?.role}</p>
                </div>

                {/* 2. Personal Information */}
                <div className="profile-section">
                    <h3>Personal Information</h3>
                    <ul>
                        <li><strong>Username:</strong> {dude?.username}</li>
                        <li><strong>Email:</strong> {dude?.email}</li>
                        <li><strong>Phone:</strong> {dude?.phone}</li>
                        <li><strong>Age:</strong> {dude?.age}</li>
                        <li><strong>Gender:</strong> {dude?.gender}</li>
                        <li><strong>Birth Date:</strong> {dude?.birthDate}</li>
                    </ul>
                </div>

                {/* 3. Company & Job Information */}
                <div className="profile-section">
                    <h3>Company</h3>
                    <ul>
                        <li><strong>Name:</strong> {dude?.company.name}</li>
                        <li><strong>Department:</strong> {dude?.company.department}</li>
                        <li><strong>Title:</strong> {dude?.company.title}</li>
                    </ul>
                </div>

                {/* 4. Address Information */}
                <div className="profile-section">
                    <h3>Address</h3>
                    <ul>
                        <li><strong>Street:</strong> {dude?.address.address}</li>
                        <li><strong>City:</strong> {dude?.address.city}</li>
                        <li><strong>Postal Code:</strong> {dude?.address.postalCode}</li>
                        <li><strong>Country:</strong> {dude?.address.country}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Profile;