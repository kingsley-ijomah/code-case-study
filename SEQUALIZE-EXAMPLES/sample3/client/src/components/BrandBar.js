import { observer } from 'mobx-react-lite';
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const {device} = React.useContext(Context);
    return (
        <Row className="d-flex">
            {device.brands.map(brand => 
                <Card
                    style={{cursor: "pointer"}}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                    className="p-3"
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
});

export default BrandBar;
