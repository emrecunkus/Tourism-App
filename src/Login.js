import React, { Component } from 'react';
import { TextInput, View, Text, ImageBackground, Image, Button, Alert, Dimensions, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get("window")

const image = { uri: "https://i.pinimg.com/originals/3f/3a/47/3f3a47c28dbc99a8fe11c22f2ee43311.jpg" };
//https://www.99images.com/photos/wallpapers/flowers/white-flower%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-lbfps.jpg?v=1615748110

class Login extends Component {
  
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
          <Text style={styles.headline}>TOURZIO</Text>
          <Text style={styles.headline2}>We stay for you.</Text>


          <View style={styles.mainView}>

            <TextInput
              placeholder="E-mail"
              placeholderTextColor="white" 
              style={inputStyle}
              value={this.props.email}
              onChangeText={null}
            />


          </View>
          <View style={styles.mainView}>

            <TextInput
              placeholder="Password"
              placeholderTextColor="white" 
              style={inputStyle}
              value={this.props.email}
              onChangeText={null}
            />


          </View>


          <TouchableOpacity onPress={() => Actions.push("forgetPassword")}>
            <Text style={styles.pStyle}>FORGOT PASSWORD?</Text>
          </TouchableOpacity>

          <View style={{ margin: 10, marginRight: 25, marginLeft: 25, borderRadius: 10 }}>
            <Button
              title="LOG IN"
              color="black"
              accessibilityLabel="Tap to Decrypt Data"
              onPress={() => {
               Actions.push("homepage");
              }}
            />
          </View>

          <View>
            <Text style={styles.headline5}>
              OR
            </Text>

            <Text style={styles.headline6}>
              Login with

            </Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>



              <View >
                {/* Icon.Button Component */}
                <Icon.Button
                  name="facebook"
                  backgroundColor="#3b5998"
                  onPress={() => alert('Login with Facebook')}>
                  Facebook
                </Icon.Button>
              </View>
              <View >
                {/* Icon.Button Component */}
                <Icon.Button
                  name="twitter"
                  backgroundColor="#65AAF7"
                  onPress={() => alert('Login with Facebook')}>
                  Twitter
                </Icon.Button>
              </View>
              <View >
                {/* Icon.Button Component */}
                <Icon.Button
                  name="google"
                  backgroundColor="red"
                  onPress={() => alert('Login with Facebook')}>
                  Google
                </Icon.Button>
              </View>


            </View >

            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
              <Text style={styles.headline6}>
                New to Taurizo?

              </Text>
              <TouchableOpacity onPress={()=>Actions.push("registerScreen")}>
              <Text style={styles.headline6}>
                Signup
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
    height: height * 0.08,
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
    marginTop: 50
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
    marginBottom: 30
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
    marginTop: 20,
    marginBottom:10,
  },


};




export default Login;