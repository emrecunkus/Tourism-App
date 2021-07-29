import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet,ImageBackground, Image, Button,Modal,Alert, Dimensions,TouchableOpacity ,ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
//import CheckboxList from 'rn-checkbox-list';

import CheckboxFormX from 'react-native-checkbox-form';
import IGStoryCircle from "react-native-instagram-story-circle";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage,CardSection } from 'react-native-cards';

import { Tabs ,Scene,IconComponent} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
  
import { SearchBar } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import TripDetail from './components/TripDetail';
const { width, height } = Dimensions.get("window")
import { CheckBox } from 'react-native-elements';

const mockData = [
  {
      label: 'label1',
      value: 'one'
  },
  {
      label: 'label2',
      value: 'two'
  },
  {
      label: 'label3',
      value: 'three'
  },
];


class CountryDetail extends Component { 


    state = {
        search: '',
        page: "HomeScreen",
        checked: false ,
        checked2: false ,
        checked3: false ,
        checked4: false ,

    };
    

    updateSearch = (search) => {
        this.setState({ search });
    };

  render() {  
     
    const { search } = this.state;
    

    return (  
      <View style = {{ backgroundColor:"gray"}}>  
      <ScrollView>
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

              
                <TripDetail/>
                <TripDetail/>
                <TripDetail/>
                <TripDetail/>
                <TripDetail/>
                <TripDetail/>

             
         
    <View style = {{ flexDirection: "row", justifyContent : "space-around"}}>

    <TouchableOpacity  onPress = {() => {this.setState({ isVisible: true})}} style = {{ flexDirection: "row"}}>
<Icon
            
            name='filter'
            type='ionicon'
            color='black'
            
          />
          <Text style = {{ paddingLeft:width*0.02}}>
            Sort by
          </Text>

   </TouchableOpacity>  
 <TouchableOpacity style = {{ flexDirection: "row"}}>
<Icon
            
            name='funnel-outline'
            type='ionicon'
            color='black'
          />
           <Text style = {{ paddingLeft:width*0.02}}>
            Filter
          </Text>


   </TouchableOpacity>  

   
</View>

<Modal   
 
            
          animationType = {"fade"}  
          
          transparent = {true}  
          visible = {this.state.isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
              <View style = {{ flexDirection :"row"}}>
                <Text style = {{marginRight: width*0.43, fontWeight:"bold"}}> Sort By </Text>
                
                <Icon onPress = {() => {  
                  this.setState({ isVisible:!this.state.isVisible})}}
            
            name='close'
            type='ionicon'
            color='gray'
          />
              </View>

              <View style = {{ flexDirection :"row"}}>
                <Text style = {{ paddingTop:height*0.024,marginRight: width*0.38}}> No of Trips </Text>
               <CheckBox
              
               uncheckedColor = "green"
               checkedColor = "green"

            
            iconRight = {true}
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
          />
              </View>
              <View style = {{ flexDirection :"row"}}>
                <Text style = {{ paddingTop:height*0.024,paddingRight: width*0.298}}> Price low to high </Text>
               <CheckBox
               uncheckedColor = "green"
               checkedColor = "green"

            
            iconRight = {true}
            checked={this.state.checked2}
            onPress={() => this.setState({checked2: !this.state.checked2})}
          />
              </View>
              <View style = {{ flexDirection :"row"}}>
                <Text style = {{ paddingTop:height*0.024,paddingRight: width*0.308}}> Price high to low</Text>
               <CheckBox
         uncheckedColor = "green"
         checkedColor = "green"

            
            iconRight = {true}
            checked={this.state.checked3}
            onPress={() => this.setState({checked3: !this.state.checked3})}
          />
              </View>
              <View style = {{ flexDirection :"row"}}>
                <Text style = {{ paddingTop:height*0.024,paddingRight: width*0.40}}>Relevance </Text>
               <CheckBox
               uncheckedColor = "green"
               checkedColor = "green"

            
            iconRight = {true}
            checked={this.state.checked4}
            onPress={() => this.setState({checked4: !this.state.checked4})}
          />
              </View>
              


            
              
              
             


            
          </View>  
        </Modal>  
     
     
       

       
        </ScrollView>
        
      </View>  
    );  
  }  
}  
const styles = {
 cardStyle: {
   height:20,
   color: "red"

 },
 container: {  
  flex: 1,  
  flexDirection: 'row',  
  height: 100,  
  width: "80%",  
  backgroundColor:"#5ead97"  
}  ,
modal: {  
  justifyContent: 'center',  
  alignItems: 'center',   
  backgroundColor : "white",   
  height: 300 ,  
  width: '80%',  
  borderRadius:10,  
  borderWidth: 1,  
  borderColor: '#fff',    
  marginTop: 80,  
  marginLeft: 40,  
   
   },  

}
export default CountryDetail;