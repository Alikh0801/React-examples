import UserCard from './UserCard.jsx';

function App() {
  const users = [
    {
      id: 1,
      name: "Ali Kheyirbayli",
      role: "Frontend Developer",
      email: "ali@company.com",
      image: "https://www.w3schools.com/w3css/img_avatar3.png"
    },
    {
      id: 2,
      name: "Murad Orucov",
      role: "Frontend Developer",
      email: "orucov@company.com",
      image: "https://www.w3schools.com/w3css/img_avatar3.png"
    },
  ]
  return (
    <div className="users-container">
      <h1>Company users</h1>
      <div className="cards">
        {users.map(user => (
          <UserCard
            key={user.id}
            image={user.image}
            name={user.name}
            role={user.role}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}




export default App;