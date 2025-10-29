import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Users Lists</h1>
            <p className="text-gray-600 mb-6 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea impedit similique et debitis eos architecto sint quia, qui obcaecati autem odio, illum ipsam tenetur eius corporis ut! Eos, corrupti odio!
            </p>
            <Link
                to="/users"
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                View Users
            </Link>
        </div>
    );
}

export default Home;
