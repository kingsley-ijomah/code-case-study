import Header from './Header';
import Footer from "./Footer";

/**
 * @author traj3ctory
 * @function Layout
 **/

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='container-fluid content'>
                <div className='container-fluid'>{children}</div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
