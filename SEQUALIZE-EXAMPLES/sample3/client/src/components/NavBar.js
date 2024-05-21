import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navbar, Nav, Button, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constansts';
import {useNavigate} from 'react-router-dom';

const NavBar = observer (() => {
    const {user} = React.useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>Buy Device! - Shop</NavLink>
                {user.isAuth ? 
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button 
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin Panel
                        </Button>
                        <Button 
                            variant={"outline-light"} 
                            className="ms-2"
                            onClick={() => logOut()}
                        >
                            Logout
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                    </Nav>        
                }
            </Container>
        </Navbar>
    )
});

export default NavBar;
