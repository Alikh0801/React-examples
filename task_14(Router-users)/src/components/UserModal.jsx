function UserModal({ user, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
                <button
                    onClick={onClose}
                    className="absolute right-3 top-2 text-gray-500 text-lg hover:text-red-500"
                >
                    ✕
                </button>

                <img
                    src={user.image}
                    alt={user.firstName}
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                />
                <h2 className="text-xl font-bold text-center mb-1">
                    {user.firstName} {user.lastName}
                </h2>
                <p className="text-center text-gray-500 mb-3">{user.company.title}</p>

                <div className="text-sm text-gray-700 space-y-1">
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Age: {user.age}</p>
                    <p>Gender: {user.gender}</p>
                </div>
            </div>
        </div>
    );
}

export default UserModal;
