import logo from '../../asset/img/logo.png'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <img src={logo} alt="petlab.co logo" width="60" height="auto" />
                </div>
            </nav>
        </>
    );
}

export default Header;
