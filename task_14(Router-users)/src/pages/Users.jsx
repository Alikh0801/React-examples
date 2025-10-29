import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(res => setUsers(res.data.users))
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">User List</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map(user => (
                    <div key={user.id} className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition">
                        <img
                            src={user.image}
                            alt={user.firstName}
                            className="w-24 h-24 rounded-full mx-auto mb-3 border"
                            onError={e => e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{user.firstName} {user.lastName}</h3>
                        <p className="text-gray-500">{user.company.title}</p>
                        <p className="text-sm text-gray-400 mt-2">{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
