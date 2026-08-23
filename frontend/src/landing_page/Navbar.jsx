import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg border-bottom sticky-top"
            style={{ backgroundColor: "#FFF" }}
        >
            <div className="container p-2">

               
                <div className="d-flex align-items-center justify-content-between w-100">

                    <NavLink className="navbar-brand" to="/">
                        <img
                            src="logo.png"
                            alt="Logo"
                            style={{ width: "25%" }}
                        />
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Products">
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Pricing">
                                Pricing
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Support">
                                Support
                            </NavLink>
                        </li>

                        <li className="nav-item d-flex flex-row">

                            <NavLink
                                className="btn text-white"
                                style={{
                                    backgroundColor: "#387ed1",
                                    marginLeft: "20px"
                                }}
                                to="/Signup"
                            >
                                Signup
                            </NavLink>

                            <NavLink
                                className="btn text-white"
                                style={{
                                    backgroundColor: "#dc3545",
                                    marginLeft: "20px"
                                }}
                                to="/Login"
                            >
                                Login
                            </NavLink>

                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;