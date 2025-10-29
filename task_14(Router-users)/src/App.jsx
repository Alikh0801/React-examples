import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch(err => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-center mt-10 text-xl text-gray-600">Loading...</h2>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {users.map(user => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1 text-center"
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{user.firstName} {user.lastName}</h3>
            <p className="text-gray-500 text-sm">{user.company.title}</p>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedUser.image}
              alt={selectedUser.firstName}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {selectedUser.firstName} {selectedUser.lastName}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{selectedUser.company.name}</p>

            <div className="mt-4 text-gray-700 text-sm">
              <p><strong>Age:</strong> {selectedUser.age}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
            </div>

            <button
              onClick={() => setSelectedUser(null)}
              className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
