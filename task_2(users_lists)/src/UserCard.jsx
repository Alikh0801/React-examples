function UserCard({ image, name, role, email }) {
    return (
        <div className="user-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p className="role">{role}</p>
            <p className="email">{email}</p>
            <button className="contact-btn">Contact</button>
        </div>
    );
}

export default UserCard;
