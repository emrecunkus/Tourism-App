import React from 'react';
import { Dimensions, TouchableOpacity,View } from 'react-native';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Register from './Register';
import Login from './Login';
import Forget from './Forget';
import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get("window")
const forgetPasswordNavBar = () => {
    return (

        <View style={{ width: width, height: height * 0.08, justifyContent: "center", alignItems: "flex-start" }}>
            <TouchableOpacity onPress={() =>
                Actions.pop()}>
                <Icon
                    name='chevron-left'
                    type='ion-icon'
                    color='#517fa4'
                    size={30}


                />



            </TouchableOpacity>

        </View>

    );
};

const RouterComponent = () => {
    return (

        <Router style={{ marginTop: 0 }}>
            <Stack key="root">
                <Scene key="register" hideNavBar={true}>

                    <Scene key="loginScreen" component={Login} hideNavBar={true} />
                    <Scene key="registerScreen" component={Register} hideNavBar={true} />
                    <Scene key="forgetPassword"  component={Forget} leftButton={forgetPasswordNavBar} navTransparent hideNavBar={false} />




                </Scene>


            </Stack>

        </Router>

    );
};

export default RouterComponent;