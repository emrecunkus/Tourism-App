import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet,ImageBackground, Image, Button, Alert, Dimensions, TouchableOpacity ,ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import 'react-native-gesture-handler';
import IGStoryCircle from "react-native-instagram-story-circle";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage,CardSection } from 'react-native-cards';
const { width, height } = Dimensions.get("window")
import { Tabs ,Scene,IconComponent} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
const image = { uri: "https://images.unsplash.com/reserve/bR4PBR2TRH2qEkB5DChN_IMG_5071.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=800" };
class Destinations extends Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };


    render() {
        const { search } = this.state; let Image_Http_URL ={ uri: 'https://media.baamboozle.com/uploads/images/95931/1603636716_55377'};
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
                <ScrollView>

                

                <View style= {{ flexDirection: 'row'}}>

                <TouchableOpacity onPress={() => Actions.push("country_detail")}>

                
                 <ImageBackground
  source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
  style={{
    height: 150,
    width: 170,
    position: 'relative', // because it's parent
    top: 2,
    left: 2,
    marginLeft:width*0.05,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  }}
>
  <Text
    style={{
      fontWeight: 'bold',
      color: 'white',
      textAlign:"center",

      paddingTop:height*0.1
    }}
  >
    Italy
  </Text>
</ImageBackground>
</TouchableOpacity>
<ImageBackground
  source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
  style={{
    height: 150,
    width: 170,
    position: 'relative', // because it's parent
    top: 2,
    left: 2,
    marginLeft:width*0.05,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
    
  }}
>
  <Text
    style={{
      fontWeight: 'bold',
      color: 'white',
      textAlign:"center",

      paddingTop:height*0.1
    }}
  >
    Hello World
  </Text>
</ImageBackground>


</View>
<View style= {{ flexDirection: 'row'}}>

                
<ImageBackground
source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
style={{
height: 150,
width: 170,
position: 'relative', // because it's parent
top: 2,
left: 2,
marginLeft:width*0.05,
marginTop: height*0.03,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,
overflow: 'hidden',


}}
>
<Text
style={{
fontWeight: 'bold',
color: 'white',
textAlign:"center",

paddingTop:height*0.1
}}
>
Hello World
</Text>
</ImageBackground>
<ImageBackground
source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
style={{
height: 150,
width: 170,
marginTop: height*0.03,
position: 'relative', // because it's parent
top: 2,
left: 2,
marginLeft:width*0.05,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,
overflow: 'hidden',

}}
>
<Text
style={{
fontWeight: 'bold',
color: 'white',
textAlign:"center",

paddingTop:height*0.1,
}}
>
Hello World
</Text>
</ImageBackground>


</View>

<View style= {{ flexDirection: 'row'}}>

                
<ImageBackground
source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
style={{
height: 150,
width: 170,
position: 'relative', // because it's parent
top: 2,
left: 2,
marginLeft:width*0.05,
marginTop: height*0.03,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,
overflow: 'hidden',


}}
>
<Text
style={{
fontWeight: 'bold',
color: 'white',
textAlign:"center",

paddingTop:height*0.1
}}
>
Hello World
</Text>
</ImageBackground>
<ImageBackground
source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
style={{
height: 150,
width: 170,
marginTop: height*0.03,
position: 'relative', // because it's parent
top: 2,
left: 2,
marginLeft:width*0.05,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,
overflow: 'hidden',

}}
>
<Text
style={{
fontWeight: 'bold',
color: 'white',
textAlign:"center",

paddingTop:height*0.1
}}
>
Hello World
</Text>
</ImageBackground>


</View>
<View style= {{ flexDirection: 'row'}}>

                
<ImageBackground
source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
style={{
height: 150,
width: 170,
position: 'relative', // because it's parent
top: 2,
left: 2,
marginLeft:width*0.05,
marginTop: height*0.03,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,
overflow: 'hidden',

}}
>
<Text
style={{
fontWeight: 'bold',
color: 'white',
textAlign:"center",

paddingTop:height*0.1
}}
>
Hello World
</Text>
</ImageBackground>
<ImageBackground
source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
style={{
height: 150,
width: 170,
marginTop: height*0.03,
position: 'relative', // because it's parent
top: 2,
left: 2,
marginLeft:width*0.05,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,
overflow: 'hidden',

}}
>
<Text
style={{
fontWeight: 'bold',
color: 'white',
textAlign:"center",

paddingTop:height*0.1
}}
>
Hello World
</Text>
</ImageBackground>


</View>
<View style= {{ flexDirection: 'row'}}>

                
<ImageBackground
source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
style={{
height: 150,
width: 170,
position: 'relative', // because it's parent
top: 2,
left: 2,
marginLeft:width*0.05,
marginTop: height*0.03,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,
overflow: 'hidden',


}}
>
<Text
style={{
fontWeight: 'bold',
color: 'white',
textAlign:"center",

paddingTop:height*0.1
}}
>
Hello World
</Text>
</ImageBackground>
<ImageBackground
source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
style={{
height: 150,
width: 170,
marginTop: height*0.03,
position: 'relative', // because it's parent
top: 2,
left: 2,
marginLeft:width*0.05,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,
overflow: 'hidden',

}}
>
<Text
style={{
fontWeight: 'bold',
color: 'white',
textAlign:"center",

paddingTop:height*0.1
}}
>
Hello World
</Text>
</ImageBackground>


</View>
</ScrollView>



                </View>
        );

            }
        }

   
export default Destinations;