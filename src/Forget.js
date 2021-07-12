import React, { Component } from 'react';
import { TextInput, View, Text, ImageBackground, Image, Button, Alert, Dimensions, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
//import { Icon } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import { italic } from 'chalk';

const { width, height } = Dimensions.get("window")


const image = { uri: "https://i.pinimg.com/originals/3f/3a/47/3f3a47c28dbc99a8fe11c22f2ee43311.jpg" };
class Forget extends Component {



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
                <Text style={{
                    marginTop: height * 0.2,
                    marginLeft: width * 0.05, fontSize: 18
                }}>{`
Forget
Password
`}</Text>

                <Text style={{
                    marginLeft: width * 0.05, fontSize: 15
                }}>
                    Select which contact details should we use to reset your password
                </Text>
                <View style={{ ...styles.mainView, flexDirection: 'row', alignItems: "center" }}>

                    <Icon
                        name='mobile'
                        type='ion-icon'
                        color='#517fa4'
                        size={30}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={inputStyle}
                        value={this.props.email}
                        onChangeText={null}
                    />



                </View>

                <View style={{ ...styles.mainView, flexDirection: 'row', alignItems: "center" }}>

                    <Icon
                        name='envelope'
                        type='ion-icon'
                        color='#517fa4'
                        size={22}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={inputStyle}
                        value={this.props.email}
                        onChangeText={null}

                    />



                </View>

                <View style={{ margin: 10, marginRight: 25, marginLeft: 25, borderRadius: 10, marginTop: 15 }}>
                    <Button
                        title="SEND"
                        color="black"
                        accessibilityLabel="Tap to Decrypt Data"
                        onPress={() => {
                            Alert.alert('You tapped the Decrypt button!');
                        }}
                    />
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
        height: height * 0.1,


        // color: "green"

    },
    mainView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        //backgroundColor: '#fff',
        height: height * 0.08,
        justifyContent: 'flex-start',
        width: width * 0.9,
        paddingLeft: width * 0.03,

        shadowOpacity: 0.1,
        shadowRadius: 5,
        //elevation: 1,
        marginLeft: 25,
        marginRight: 25,
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

        // textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        // marginTop: 10,

        height: height * 0.05,
        color: "black",
        //backgroundColor: 'white',

        marginTop: height * 0.2,
        marginLeft: width * 0.05
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




export default Forget;