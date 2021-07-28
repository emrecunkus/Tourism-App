import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, ImageBackground, Image, Button, Alert, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import 'react-native-gesture-handler';
import IGStoryCircle from "react-native-instagram-story-circle";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage, CardSection } from 'react-native-cards';
const { width, height } = Dimensions.get("window")
import { Tabs, Scene, IconComponent } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import SelectedDestination from './components/selectedDestination';
const image = { uri: "https://images.unsplash.com/reserve/bR4PBR2TRH2qEkB5DChN_IMG_5071.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=800" };
class Destinations extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };


  render() {
    const { search } = this.state; let Image_Http_URL = { uri: 'https://media.baamboozle.com/uploads/images/95931/1603636716_55377' };
    return (

      <View style={{ flex: 1 , backgroundColor: "#4F524E"}}>

        <Text style={{
          fontWeight: 'bold',
          fontStyle: 'italic',

          textAlign: 'center', // <-- the magic
          fontWeight: 'bold',
          fontSize: 17,
          // marginTop: 10,

          height: height * 0.05,
          color: "white",
          //backgroundColor: 'white',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: height*0.03
        }}>
          Destinations
        </Text>
        <SearchBar
          placeholder="Find your Destinations.."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme="white"
          searchIcon = {true}

          containerStyle={{
            backgroundColor: "traan",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",




            borderRadius: 20
          }}

          inputContainerStyle={{
            backgroundColor: "white",
            


            borderRadius: 20
          }}
        // color= "red"
        />
        <ScrollView>



          <View style={{ flexDirection: 'row' , marginBottom: height*0.03}}>


            <SelectedDestination />
            <SelectedDestination />



          </View>

          <View style={{ flexDirection: 'row' ,marginBottom: height*0.03}}>


<SelectedDestination />
<SelectedDestination />



</View >

<View style={{ flexDirection: 'row' , marginBottom: height*0.03}}>


<SelectedDestination />
<SelectedDestination />



</View>
<View style={{ flexDirection: 'row', marginBottom: height*0.03 }}>


<SelectedDestination />
<SelectedDestination />



</View>
<View style={{ flexDirection: 'row', marginBottom: height*0.03 }}>


<SelectedDestination />
<SelectedDestination />



</View>
<View style={{ flexDirection: 'row', marginBottom: height*0.03 }}>


<SelectedDestination />
<SelectedDestination />



</View>
         



        </ScrollView>



      </View>
    );

  }
}


export default Destinations;