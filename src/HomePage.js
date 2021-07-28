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

class HomePage extends Component {
 
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };


    render() {
        const { search } = this.state;
        let Image_Http_URL ={ uri: 'https://media.baamboozle.com/uploads/images/95931/1603636716_55377'};
        return (

            <View style={{ flex: 1 }}> 
            <ScrollView>

           
             <ImageBackground source={image} resizeMode="cover" style={styles.image}>

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
                <Text style = {{fontSize:15, marginLeft: width*0.05, color: "white"}}>TRIP </Text>
                <Text style = {{fontSize:16,  fontWeight: 'bold', marginLeft: width*0.05, color: "white"}}>THEMES </Text>
<View style={styles.root}>
<ScrollView horizontal = {true}>
<TourismStory/>
<TourismStory/>
<TourismStory/>
<TourismStory/>
<TourismStory/>
<TourismStory/>
<TourismStory/>
<TourismStory/>



    
      </ScrollView>        


                
 
 



<Text style = {{fontSize:15, marginLeft: width*0.05, marginTop: height*0.02, color:"white"}} > TRENDING</Text>
<TouchableOpacity onPress={() => Actions.push("destination")}>
  <Text style = {{fontSize:16, marginLeft: width*0.04, fontWeight: 'bold', marginBottom: height*0.01, color:"white"}}>  DESTINATIONS  </Text>
</TouchableOpacity>
<ScrollView  horizontal  = {true}>

          <View style = {{paddingLeft:12}}>
             <TrendingDestination />
          </View>
        
         <TrendingDestination/>
         <TrendingDestination/>
         <TrendingDestination/>
         <TrendingDestination/>
         <TrendingDestination/>

        

        
      
        
       

        </ScrollView>


                </View>
                <Text style = {{fontSize:15, marginLeft: width*0.05, marginTop: height*0.02, color:"white"}} > SPECIAL</Text>
<TouchableOpacity onPress={() => Actions.push("destination")}>
  <Text style = {{fontSize:16, marginLeft: width*0.04, fontWeight: 'bold', marginBottom: height*0.01, color:"white"}}>  OFFERS  </Text>
</TouchableOpacity>

<ScrollView horizontal = {true}>
    <View style = {{ paddingLeft:12}}>
    <SpecialOffer link = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/TDL_Cinderella_Castle_New_Color.jpg' title = 'Disney' subtitle= 'Come visit us'/>
    </View>
  
  <SpecialOffer link = 'https://i.pinimg.com/originals/82/74/e4/8274e4c240f66ccbd53068d0e14cfd1b.jpg' title = 'Pamukkale' subtitle= 'Beauty of Denizli'/>
  <SpecialOffer link = 'http://pinocchiotourism.com/site_document/urun_img/V3IVZ4ODG_resim_17_10_2017_14_b.jpg' title = 'Kapodakya' subtitle= 'Prepare for flights'/>
  <SpecialOffer link = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/TDL_Cinderella_Castle_New_Color.jpg' title = 'Disney' subtitle= 'Come visit us'/>
  <SpecialOffer link = 'https://i.pinimg.com/originals/82/74/e4/8274e4c240f66ccbd53068d0e14cfd1b.jpg' title = 'Pamukkale' subtitle= 'Beauty of Denizli'/>
  <SpecialOffer link = 'http://pinocchiotourism.com/site_document/urun_img/V3IVZ4ODG_resim_17_10_2017_14_b.jpg' title = 'Kapodakya' subtitle= 'Prepare for flights'/>
  
 

       
       
</ScrollView>

              </ImageBackground>
              </ScrollView>
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

  circileImage: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    overflow: "hidden",
   // borderWidth: 1,
    //borderColor: "red",
    marginLeft: width*0.05,
    marginTop: height*0.01
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
    justifyContent: "flex-start",
 
    
   

   
  
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

export default HomePage;