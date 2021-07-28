import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet,ImageBackground, Image, Button, Alert, Dimensions, TouchableOpacity ,ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import 'react-native-gesture-handler';
import IGStoryCircle from "react-native-instagram-story-circle";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
const { width, height } = Dimensions.get("window")
import { Tabs ,Scene,IconComponent} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import { Appbar } from 'react-native-paper';import { Drawer } from 'react-native-paper';
import TourismStory from './components/TourismStory';
import TrendingDestination from './components/TrendingDestination';
import SpecialOffer from './components/SpecialOffer';
const image = { uri: "https://images.unsplash.com/reserve/bR4PBR2TRH2qEkB5DChN_IMG_5071.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=800" };

class FilteringPage extends Component {


    render() {
   const { search } = this.state;
       

       
     
       
        return (

            <View style={{ flex: 1 }}> 
            

           
          

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
                </View>
   ); 

}
}
        

export default FilteringPage;