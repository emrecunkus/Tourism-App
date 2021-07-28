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
import { Drawer } from 'react-native-router-flux';
import Destinations from './Destinations';
import CountryDetail from './CountryDetail';
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

const destNavBar = () => {
    return (

        <View style={{ width: width, height: height * 0.08, justifyContent: "center", alignItems: "flex-start", }}>
            <TouchableOpacity  onPress={() =>
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


                        <Scene key="homepage" component={HomePage} hideNavBar={true} />
                       
                  
                    <Scene key="destination" titleStyle={{ color: "transparent" }} component={Destinations} hideNavBar={true} leftButton={forgetPasswordNavBar} navTransparent hideNavBar={false} />
               
                    <Scene key="country_detail" titleStyle={{ color: "transparent" }} component={CountryDetail} hideNavBar={true} leftButton={forgetPasswordNavBar} navTransparent hideNavBar={false} />

                        <Scene
                         // add a new one here filtering page
                        />
                            
                        



                    </Scene>


            </Stack>

        </Router>

            );
};

            export default RouterComponent;