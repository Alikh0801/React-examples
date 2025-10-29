import { useEffect, useState } from "react";
import axios from "axios";
import UserModal from "../components/UserModal";

function UserList() {
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(res => setUsers(res.data.users))
            .catch(err => console.error("API error:", err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                User List
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {users.map(user => (
                    <div
                        key={user.id}
                        onClick={() => setSelected(user)}
                        className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition cursor-pointer"
                    >
                        <img
                            src={user.image}
                            alt={user.firstName}
                            className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
                        />
                        <h3 className="text-lg font-bold text-center">{user.firstName} {user.lastName}</h3>
                        <p className="text-center text-gray-500">{user.company.title}</p>
                    </div>
                ))}
            </div>

            {selected && <UserModal user={selected} onClose={() => setSelected(null)} />}
        </div>
    );
}

export default UserList;
