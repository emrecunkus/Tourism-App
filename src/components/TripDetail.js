import React from 'react';
import { View,TouchableOpacity,Image,Text,Dimensions ,} from 'react-native';
import { Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");

const TripDetail = (props) => {
  
  return (
    <TouchableOpacity>
        <View style={{ backgroundColor: "white", borderRadius: 10, overflow: "hidden",marginRight:25,marginLeft:25, marginBottom:20}}>
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
  );
};



export default TripDetail;