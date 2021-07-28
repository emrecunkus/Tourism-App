import React from 'react';
import { View,TouchableOpacity,Image,Text,Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const TrendingDestination = (props) => {
  
  return (
    <TouchableOpacity>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden",marginRight:10,marginLeft:10, marginBottom:10}}>
          <View>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1620127682229-33388276e540?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwYmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
            }}
              style={{
                height: 130,
                width: 130
              }}
            />
          </View>
          <View style={{ padding: 7, width: 130 }}>
            <Text>Title</Text>
            <View style = {{ flexDirection : "row"}}>

            
            <Text style={{ color: "#777", paddingTop: 1 }}>
              starting: 
            </Text>
            <Text style = {{ color: "#08B803" , fontWeight: "bold", fontSize : 13,paddingTop: 2}}> $1400/- </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
  );
};



export default TrendingDestination;