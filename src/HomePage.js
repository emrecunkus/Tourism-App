import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet,ImageBackground, Image, Button, Alert, Dimensions, TouchableOpacity ,ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import 'react-native-gesture-handler';
import IGStoryCircle from "react-native-instagram-story-circle";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
const { width, height } = Dimensions.get("window")

   

class HomePage extends Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };


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
                    color: "black",
                    //backgroundColor: 'white',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginTop: 20
                }}>
                    HomePage
                </Text>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme = "white"
                />
                <Text style = {{fontSize:1}}>Trip </Text>
                <Text style = {{fontSize:18,  fontWeight: 'bold'}}>Themes </Text>
<View style={styles.root}>
<ScrollView   horizontal={true}>
<IGStoryCircle  source={{
          uri: 'https://pbs.twimg.com/profile_images/1412145333069619203/TzvfTp8K_400x400.jpg',
        }}  hasStory onPress={() => {}} />
        <IGStoryCircle  source={{
            uri: 'https://pbs.twimg.com/profile_images/1412145333069619203/TzvfTp8K_400x400.jpg',
        }}  hasStory onPress={() => {}} />
        <IGStoryCircle  source={{
           uri: 'https://pbs.twimg.com/profile_images/1412145333069619203/TzvfTp8K_400x400.jpg',
        }}  hasStory onPress={() => {}} />
        <IGStoryCircle  source={{
            uri: 'https://pbs.twimg.com/profile_images/1412145333069619203/TzvfTp8K_400x400.jpg',
        }}  hasStory onPress={() => {}} />
        <IGStoryCircle  source={{
           uri: 'https://pbs.twimg.com/profile_images/1412145333069619203/TzvfTp8K_400x400.jpg',
        }}  hasStory onPress={() => {}} />
        <IGStoryCircle  source={{
            uri: 'https://pbs.twimg.com/profile_images/1412145333069619203/TzvfTp8K_400x400.jpg',
        }}  hasStory onPress={() => {}} />
        <IGStoryCircle  source={{
            uri: 'https://pbs.twimg.com/profile_images/1412145333069619203/TzvfTp8K_400x400.jpg',
        }}  hasStory onPress={() => {}} />
                 
                </ScrollView>


                <ScrollView horizontal = {false}>
 
 <Card>
   <CardImage 
     source={{uri: 'http://bit.ly/2GfzooV'}} 
     title="Top 10 South African beaches"
   />
   <CardTitle
     subtitle="Number 6"
   />
   <CardContent text="Clifton, Western Cape" />
   <CardAction 
     separator={true} 
     inColumn={false}>
     <CardButton
       onPress={() => {}}
       title="Share"
       color="#FEB557"
     />
     <CardButton
       onPress={() => {}}
       title="Explore"
       color="#FEB557"
     />
   </CardAction>
 </Card>
 <Card>
   <CardImage 
     source={{uri: 'http://bit.ly/2GfzooV'}} 
     title="Top 10 South African beaches"
   />
   <CardTitle
     subtitle="Number 6"
   />
   <CardContent text="Clifton, Western Cape" />
   <CardAction 
     separator={true} 
     inColumn={false}>
     <CardButton
       onPress={() => {}}
       title="Share"
       color="#FEB557"
     />
     <CardButton
       onPress={() => {}}
       title="Explore"
       color="#FEB557"
     />
   </CardAction>
 </Card>
 <Card>
   <CardImage 
     source={{uri: 'http://bit.ly/2GfzooV'}} 
     title="Top 10 South African beaches"
   />
   <CardTitle
     subtitle="Number 6"
   />
   <CardContent text="Clifton, Western Cape" />
   <CardAction 
     separator={true} 
     inColumn={false}>
     <CardButton
       onPress={() => {}}
       title="Share"
       color="#FEB557"
     />
     <CardButton
       onPress={() => {}}
       title="Explore"
       color="#FEB557"
     />
   </CardAction>
 </Card>
 <Card>
   <CardImage 
     source={{uri: 'http://bit.ly/2GfzooV'}} 
     title="Top 10 South African beaches"
   />
   <CardTitle
     subtitle="Number 6"
   />
   <CardContent text="Clifton, Western Cape" />
   <CardAction 
     separator={true} 
     inColumn={false}>
     <CardButton
       onPress={() => {}}
       title="Share"
       color="#FEB557"
     />
     <CardButton
       onPress={() => {}}
       title="Explore"
       color="#FEB557"
     />
   </CardAction>
 </Card>
 <Card>
   <CardImage 
     source={{uri: 'http://bit.ly/2GfzooV'}} 
     title="Top 10 South African beaches"
   />
   <CardTitle
     subtitle="Number 6"
   />
   <CardContent text="Clifton, Western Cape" />
   <CardAction 
     separator={true} 
     inColumn={false}>
     <CardButton
       onPress={() => {}}
       title="Share"
       color="#FEB557"
     />
     <CardButton
       onPress={() => {}}
       title="Explore"
       color="#FEB557"
     />
   </CardAction>
 </Card>

</ScrollView>
                

                

                
                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
  
});


export default HomePage;