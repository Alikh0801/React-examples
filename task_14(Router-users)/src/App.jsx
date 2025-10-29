import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">User App</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/users" className="hover:underline">Users</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
