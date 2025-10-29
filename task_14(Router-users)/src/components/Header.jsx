import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Title</h1>
            <nav className="space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="/users" className="text-gray-700 hover:text-blue-600">Users</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
