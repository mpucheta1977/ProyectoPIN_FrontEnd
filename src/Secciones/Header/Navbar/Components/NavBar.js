function NavBar() {
    return (
        <section>
            <nav className="navbar navbar-expand-lg bg-body-dark" id="navbar-principal">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <img src="/public/Assets/Images/top-logo.png" alt="" className='logo-top' />
                        <ul className="navbar-nav">
                            <li className='nav-item'>
                                <a className="nav-link" href='#carrusel-principal'>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

    )

};

export default NavBar;
