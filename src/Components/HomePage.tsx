import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Form Builder</h1>
            <img src="https://formpress.org/images/hero.png" alt="Form Builder Banner" />
            <nav className="nav-links">
                <Link to="/createForms" className="nav-link">Create Forms</Link>
                <Link to="/listForms" className="nav-link">Fill Forms</Link>
                <Link to="/submittedForms" className="nav-link">Submitted Forms</Link>
            </nav>
        </div>
    );
}

export default HomePage;
