import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [isBrandVisible, setBrandVisible] = React.useState(false);
    const [isTypeVisible, setTypeVisible] = React.useState(false);
    const [isDeviceVisible, setDeviceVisible] = React.useState(false);
    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Create type
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Create brand
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Create device
            </Button>
            <CreateType show={isTypeVisible} onHide={() => setTypeVisible(false)} />
            <CreateBrand show={isBrandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={isDeviceVisible} onHide={() => setDeviceVisible(false)} />
        </Container>
    )
}

export default Admin;
