const Footer = () => {

    return (

        <div className="footer">
            <div className="container-fluid">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Avsys, Inc</p>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Úvod</a></li>
                        <li className="nav-item"><a href="/list" className="nav-link px-2 text-muted">Loginy</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Niečo</a></li>
                    </ul>
                </footer>
            </div>

        </div>

    );
}

export default Footer;