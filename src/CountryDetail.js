import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet,ImageBackground, Image, Button, Alert, Dimensions, TouchableOpacity ,ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import 'react-native-gesture-handler';
import IGStoryCircle from "react-native-instagram-story-circle";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage,CardSection } from 'react-native-cards';

import { Tabs ,Scene,IconComponent} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
  
import { SearchBar } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
const { width, height } = Dimensions.get("window")
class CountryDetail extends Component { 
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };
 
  render() {  
    const { search } = this.state;
    return (  
      <View>  
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

                
          <TouchableOpacity>
        <View style={{ backgroundColor: "white", borderRadius: 10, overflow: "hidden",marginRight:25,marginLeft:25, marginBottom:10}}>
          <View>
            <Image
              source={{
                uri: 'https://azhrnazln.files.wordpress.com/2015/09/italian-culture.jpg',
            }}
              style={{
                height: 140,
                width: width*0.9
              }}
            />
            <Text style={{position: 'absolute',marginTop: height*0.15, color:"white", fontWeight:"bold", marginLeft: width*0.03}}>Italy Food Adventure Badget{"\n"} Tour Package</Text>
           <View style = {{width: width*0.3, height:height*0.045,borderRadius:4, position: 'absolute',marginTop: height*0.15, backgroundColor: "#32CD32", fontWeight:"bold", marginLeft: width*0.583, flex:1}}>
             <Text style = {{color: "white", marginLeft: width*0.015,marginRight: width*0.02, marginTop: height*0.005}}>4 days & 3 Nights </Text>
  
           </View>
        
          </View>
          <View style={{ padding: 7, width: width*0.9,height:height*0.15 }}>
            <Text style={{ color: "green", paddingTop: 1 }}>starting from</Text>
            <View style = {{flexDirection: "row"}}>

            
            <Text style={{ color: "black", paddingTop: 1, fontWeight:"bold", fontSize:16 }}>
              $1499
            </Text>
            <Text style={{ color: "gray", paddingTop: 1, fontWeight:"normal",paddingLeft: width*0.03 }}>
                   per person on twin sharing
            </Text>
            </View>
            <View style = {{ flexDirection :"row", paddingTop: height*0.03, justifyContent: "space-between" }}>

           
            <Text style >
            Amsterdam to Greece
            </Text>
            <View style = {{ flexDirection: "row", marginRight:width*0.02}}>
            <Icon
            
            name='airplane-outline'
            type='ionicon'
            color='gray'
          />
           <Icon
            
            name='car-sport-outline'
            type='ionicon'
            color='gray'
          />
            <Icon
            
            name='bed-outline'
            type='ionicon'
            color='gray'
          />
          <Icon
            
          name='pizza-outline'
          type='ionicon'
          color='gray'
        />
        <Text
        >
          +4
        </Text>
            </View>
           
            </View>
          </View>
         
        </View>
        </TouchableOpacity>
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