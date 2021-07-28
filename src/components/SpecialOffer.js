import React from 'react';
import { View,TouchableOpacity,Image,Text,Dimensions  } from 'react-native';
const { width, height } = Dimensions.get("window");

const SpecialOffer = ({link, title, subtitle}) => {
  
    
  
  return (
    <TouchableOpacity>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden",marginRight:10,marginLeft:width*0.02, marginBottom:10}}>
          <View>
            <Image
              source={{ uri : link}}
              style={{
                height: height*0.27,
                width: width*0.45
              }}
            />
          </View>
          <View style={{ padding: 7, width: width*0.45 }}>
            <Text>{title}</Text>
            <Text style={{ color: "#777", paddingTop: 1 }}>
             {subtitle}
            </Text>
          </View>
        </View>
        </TouchableOpacity>
  );
};



export default SpecialOffer;