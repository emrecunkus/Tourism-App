import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Register from './Register';
import Login from './Login';

const RouterComponent = () => {
    return (

        <Router style={{ marginTop: 0 }}>
            <Stack key="root">
                <Scene key="register" hideNavBar={true}>
                   
                    <Scene key="loginScreen" component={Login} hideNavBar={true} />
                    <Scene key="registerScreen" component={Register} hideNavBar={true} />

                </Scene>

                
            </Stack>

        </Router>

    );
};

export default RouterComponent;