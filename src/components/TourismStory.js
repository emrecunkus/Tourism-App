import React from 'react';
import { View,TouchableOpacity,Image,Text,Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const TourismStory = (props) => {
  let Image_Http_URL ={ uri: 'https://media.baamboozle.com/uploads/images/95931/1603636716_55377'};
  return (
    <View>


    <TouchableOpacity> 
    <Image source={Image_Http_URL} style={styles.circileImage}/>
    <Text style = {{ textAlign :"center", justifyContent :"center",paddingLeft:17 ,fontWeight: 'bold',color:"white" }}> Deneme</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {

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

};

export default TourismStory;