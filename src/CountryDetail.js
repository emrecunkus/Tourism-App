import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet,ImageBackground, Image, Button, Alert, Dimensions,TouchableOpacity ,ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import IGStoryCircle from "react-native-instagram-story-circle";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage,CardSection } from 'react-native-cards';

import { Tabs ,Scene,IconComponent} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
  
import { SearchBar } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import TripDetail from './components/TripDetail';
const { width, height } = Dimensions.get("window")
class CountryDetail extends Component { 
    state = {
        search: '',
        page: "HomeScreen",
    };
    

    updateSearch = (search) => {
        this.setState({ search });
    };
 
  render() {  
    const { search } = this.state;
    return (  
      <View style = {{ backgroundColor:"gray"}}>  
      <ScrollView>
        <Text style={{
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
                    marginTop: 10
                }}>
                    TOURZIO
                </Text>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                     lightTheme = "white"
                   
                    containerStyle = {{
                      backgroundColor : "traan",
                      borderBottomColor : "transparent",
                      borderTopColor: "transparent",
                   
                      
                      

                      borderRadius: 20
                    }}

                    inputContainerStyle = {{
                      backgroundColor: "white",
                    

                      borderRadius:20
                    }}
                   // color= "red"
                />

              
                <TripDetail/>
                <TripDetail/>
                <TripDetail/>
                <TripDetail/>
                <TripDetail/>
                <TripDetail/>

             
         
        
                <CheckBox
         // her eit will be changed
        />
       
        </ScrollView>
        
      </View>  
    );  
  }  
}  
const styles = {
 cardStyle: {
   height:20,
   color: "red"

 },
 container: {  
  flex: 1,  
  flexDirection: 'row',  
  height: 100,  
  width: "80%",  
  backgroundColor:"#5ead97"  
}  

}
export default CountryDetail;