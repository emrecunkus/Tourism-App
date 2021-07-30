import React from 'react';
import { View,TouchableOpacity,Image,Text,Dimensions  } from 'react-native';
const { width, height } = Dimensions.get("window");

const MyCheckBox = ({link, title, subtitle}) => {
  
    
  
  return (
    <View style = {{ flexDirection :"row"}}>
            
    <CheckBox
    uncheckedColor = "green"
    checkedColor = "green"
    size = {19}

 checked={this.state.checked4}
 onPress={() => this.setState({checked4: !this.state.checked4})}
/>
<Text style = {{ paddingTop:height*0.024,paddingLeft: width*0.02}}>Relevance </Text>
   </View>

  );
};



export default MyCheckBox;