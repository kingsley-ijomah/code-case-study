import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const {user} = React.useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    )
}

export default AppRouter;