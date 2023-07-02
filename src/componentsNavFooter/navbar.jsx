import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
    const [cookie, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate()

    const LogOut = () => {
        setCookies("access_token", null, { expires: new Date(0) })
        window.localStorage.removeItem("userID")
        navigate("/buy-dogs/register")
    }
    return (
        <header className="fixed-top">
            <nav className="navbar navbar-expand-lg bg ">

                <div className="container-fluid">
                    <a className="navbar-brand fs-1 d-flex" href="/">
                        <button data-text="Awesome" className="buttonBrand">
                            <span className="actual-text text-light">&nbsp;Fury Dogs&nbsp;</span>

                            <span className="hover-text " aria-hidden="true">&nbsp;Fury Dogs&nbsp;</span>
                        </button>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-left">
                            <li className="nav-item me-3">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link active" href="/about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/contact-us">
                                    Contact us
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav me-3 mb-2 mb-lg-0 ">

                            {!cookie.access_token ? (
                                <>
                                    <li className="nav-item me-3">
                                        <Link to='/buy-dogs/login' className="nav-link active" aria-current="page">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item me-3">
                                        <Link to='/buy-dogs/register' className="nav-link active">
                                            SignUp
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item me-3">
                                        <Link to="/favouriteDogs" className="nav-link active">
                                            Favourite Puppy
                                        </Link>
                                    </li>
                                    <li className="nav-item me-3">
                                        <Link to="/buy-dogs/auth/addDogForm" className="nav-link active">
                                            Add Puppy
                                        </Link>
                                    </li>
                                    <button className="nav-link active" onClick={LogOut}>LogOut</button>
                                </>
                            )}

                        </ul>


                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
