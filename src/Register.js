import React, { Component } from 'react';
import { TextInput, View, Text, ImageBackground, Image, Button, Alert, Dimensions, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';


import Icon from 'react-native-vector-icons/FontAwesome';
import { italic } from 'chalk';

const { width, height } = Dimensions.get("window")

const image = { uri: "https://i.pinimg.com/originals/3f/3a/47/3f3a47c28dbc99a8fe11c22f2ee43311.jpg" };
//https://www.99images.com/photos/wallpapers/flowers/white-flower%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-lbfps.jpg?v=1615748110

class Register extends Component {

    state = { email: '', password: '', loading: false };

    clickLogin() {
        const { email, password } = this.props;

    }

    renderButton() {
        if (!this.props.loading) {

        }
        return <Spinner size="small" />;
    }
    render() {
        const { inputStyle } = styles;
        return (

            <View style={{ flex: 1 }}>


                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Text style={styles.headline}>Register page TOURZIO</Text>
                    <Text style={styles.headline2}>We stay for you.</Text>

                    <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginLeft: 10 }} >


                        <View style={styles.mainView}>

                            <TextInput
                                placeholder="First Name"
                                placeholderTextColor="white"
                                style={inputStyle}
                                value={this.props.email}
                                onChangeText={null}
                            />


                        </View>
                        <View style={styles.mainView}>

                            <TextInput
                                placeholder="Last Name"
                                placeholderTextColor="white"
                                style={inputStyle}
                                value={this.props.email}
                                onChangeText={null}
                            />


                        </View>
                    </View>
                    <View style={styles.mainView2}>

                        <TextInput
                            placeholder="E-mail"
                            placeholderTextColor="white"
                            style={inputStyle}
                            value={this.props.email}
                            onChangeText={null}
                        />


                    </View>
                    <View style={styles.mainView2}>

                        <TextInput
                            placeholder="Mobile Phone"
                            placeholderTextColor="white"
                            style={inputStyle}
                            value={this.props.email}
                            onChangeText={null}
                        />


                    </View>
                    <View style={styles.mainView2}>

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="white"
                            style={inputStyle}
                            value={this.props.email}
                            onChangeText={null}
                        />


                    </View>
                    <View style={styles.mainView2}>

                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor="white"
                            style={inputStyle}
                            value={this.props.email}
                            onChangeText={null}
                        />


                    </View>


                    
                    <View style={{ margin: 10, marginRight: 25, marginLeft: 25, borderRadius: 10 , marginTop:15}}>
                        <Button 
                            title="REGISTER"
                            color="black"
                            accessibilityLabel="Tap to Decrypt Data"
                            onPress={() => {
                                Alert.alert('You tapped the Decrypt button!');
                            }}
                        />
                    </View>

                    <View>
                       
                        <Text style={styles.headline6}>
                            By clicking Register, you accept our terms of Use and Privacy Policy

                        </Text>
                      

                        <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                            <Text style={styles.headline6}>
                               Already have an account? 

                            </Text>
                            <TouchableOpacity onPress={() => Actions.push("loginScreen")}>
                                <Text style={styles.headline6}>
                                    Login

                                </Text>
                            </TouchableOpacity>
                        </View>



                    </View>

                </ImageBackground>
            </View>
        );
    }
}

const styles = {

    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1,
        height: height * 0.1,


        // color: "green"

    },
    mainView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        //backgroundColor: '#fff',
        height: height * 0.07,
        justifyContent: 'center',
        width: width * 0.42,

        shadowOpacity: 0.1,
        shadowRadius: 5,
        //elevation: 1,
        //marginLeft: 10,
        // marginRight: 25,
        marginTop: 13,

    },
    mainView2: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        //backgroundColor: '#fff',
        height: height * 0.07,
        justifyContent: 'center',
        width: width * 0.9,

        shadowOpacity: 0.1,
        shadowRadius: 5,
        //elevation: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 13,

    },
    headline: {

        fontWeight: 'bold',
        fontStyle: 'italic',

        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        // marginTop: 10,

        height: height * 0.05,
        color: "white",
        //backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 30
    },
    headline2: {
        textAlign: 'center',
        fontStyle: 'italic',

        color: "white",
        fontSize: 15,


        height: height * 0.05,
        //backgroundColor: 'white',
        justifyContent: 'flex-start',

        alignItems: 'flex-start',
        marginBottom: 5
    },
    image: {
        flex: 1,
        justifyContent: "flex-start"
    },
    headline5: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        color: "white",
        // marginTop: 10,
        ///width: 420,
        height: height * 0.05,
        // backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 30
    },
    pStyle: {
        textAlign: 'right',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 30,
        color: "white",
        marginTop: 15,
        marginBottom: 10

    },
    headline6: {
        textAlign: 'center',
        color: "white",
        fontSize: 15,


        justifyContent: 'flex-start',

        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
    },


};




export default Register;