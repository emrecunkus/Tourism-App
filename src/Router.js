import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Scene, Router, Stack, Actions, Tabs } from 'react-native-router-flux';
import Register from './Register';
import Login from './Login';
import Forget from './Forget';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-elements/dist/helpers';
import HomePage from './HomePage';
import deneme from './deneme';


const { width, height } = Dimensions.get("window")
const forgetPasswordNavBar = () => {
    return (

        <View style={{ width: width, height: height * 0.08, justifyContent: "center", alignItems: "flex-start", }}>
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
                    <Scene key="forgetPassword" titleStyle={{ color: "transparent" }} component={Forget} leftButton={forgetPasswordNavBar} navTransparent hideNavBar={false} />




                </Scene>

                <Scene key="main" hideNavBar={true}>


                    <Scene key="homepage" tabs={true} component={HomePage} hideNavBar={true} wrap={false} >
                        <Tabs
                            showLabel={false}
                            lazy={true}
                         
                            swipeEnabled={false}
                        >
                            <Scene
                                hideNavBar
                                key={"deneme"}
                                component={Login}
                                tit
                               
                            />
                            <Scene
                                hideNavBar
                                key={"register"}
                                component={Register}
                              
                            />
                            </Tabs>
                    </Scene>






                    </Scene>


            </Stack>

        </Router>

            );
};

            export default RouterComponent;