import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="logo">My Web Site</div>

            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
