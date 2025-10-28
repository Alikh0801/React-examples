import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
      })
  }, []);

  return (
    <div className="container">
      <h1>Company USees</h1>

      <div className="cards">
        {users.map((user) => (

          <div key={user.id} className="card">

            <img src={user.image} alt="" />
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Work: {user.company.title}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
