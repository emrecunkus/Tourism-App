import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet,ImageBackground,ActivityIndicator, Image, Button,Modal,Alert, Dimensions,TouchableOpacity ,ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';

import 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import CheckboxList from 'rn-checkbox-list';
import { Divider } from 'react-native-elements';
import MyCheckBox from './components/MyCheckBox';
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


const data = [
  { id: 1, name: 'Green Book' },
  { id: 2, name: 'Bohemian Rhapsody' },
  { id: 3, name: 'Roma' },
  { id: 4, name: 'Black Panther' },
  { id: 5, name: 'The Favourite' },
  { id: 6, name: 'A Star Is Born' },
  { id: 7, name: 'Vice' },
  { id: 8, name: 'BlacKkKlansman' },
 
];
class CountryDetail extends Component { 


    state = {
        
        search: '',
        page: "HomeScreen",
       
        checked: false ,
        checked2: false ,
        checked3: false ,
        checked4: false ,
         loader: true

    };
    componentDidMount() {
      setTimeout(() => this.setState({ loader: false }), 500);
    }
    

    updateSearch = (search) => {
        this.setState({ search });
    };
    

  render() {  
    const theme = 'red';
    const border = 'grey';
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

    <TouchableOpacity onPress = {() => {this.setState({ isVisible: true})}} style = {{ flexDirection: "row"}} >
<Icon
            
            name='filter'
            type='ionicon'
            color='black'
            
          />
          <Text style = {{ paddingLeft:width*0.02}}>
            Sort by
          </Text>

   </TouchableOpacity >  
 <TouchableOpacity onPress = {() => {this.setState({ isfilterVisible: true})}} style = {{ flexDirection: "row"}} style = {{ flexDirection: "row"}}>
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
        <Modal   
 
            
          animationType = {"fade"}  
          
          transparent = {true}  
          visible = {this.state.isfilterVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal2}>  
              <View style = {{ flex: 0.11,backgroundColor : "#A9A9A9", height : height*0.11, width: width, flexDirection: "row",justifyContent:"space-between"}}>
                  <Text style = {{ marginTop: height*0.04, marginLeft:width*0.04,fontSize:15 }}>
                    Filters
                  </Text>
                  <TouchableOpacity style = {{ marginTop: height*0.03, marginRight:width*0.04, }}>
                <Icon onPress = {() => {  
                  this.setState({ isfilterVisible:!this.state.isfilterVisible})}}
            
            name='close'
            type='ionicon'
            color='gray'
                          />

                  </TouchableOpacity>
                  
              </View>
            <View style = {{ flex: 0.06, backgroundColor: "#E8E0D9", height: height*0.07, width: width, flexDirection: "row" , justifyContent: "space-between"}}>
              

              <Text style = {{marginLeft: width*0.03, fontWeight:"bold",marginTop: height*0.01}}> Budget(per person) </Text>
              <TouchableOpacity>

                <Text style = {{marginRight: width*0.03, fontWeight:"bold",marginTop: height*0.01}}> CLEAR </Text>
              </TouchableOpacity>

              


            </View>

            <View style = {{ flex: 0.7}}>
            <View style = {{ flexDirection :"row", flex: 0.1,marginBottom:-20, marginTop: -10}}>
              
              <CheckBox
              uncheckedColor = "green"
              checkedColor = "green"

           
          
           checked={this.state.checked4}
           onPress={() => this.setState({checked4: !this.state.checked4})}
         />
           <Text style = {{ marginTop:height*0.021,marginRight: width*0.05,marginLeft:width*0.02}}>Relevancee </Text>
           
             </View>
             <Divider orientation="horizontal" />

           
             <View style = {{ flexDirection :"row", flex: 0.1,marginBottom:-20, marginTop: -10}}>
              
              <CheckBox
              uncheckedColor = "green"
              checkedColor = "green"

           
          
           checked={this.state.checked4}
           onPress={() => this.setState({checked4: !this.state.checked4})}
         />
           <Text style = {{ marginTop:height*0.021,marginRight: width*0.05,marginLeft:width*0.02}}>Relevancee </Text>
           
             </View>
             <Divider orientation="horizontal" />

           
             <View style = {{ flexDirection :"row", flex: 0.1,marginBottom:-20, marginTop: -10}}>
              
              <CheckBox
              uncheckedColor = "green"
              checkedColor = "green"

           
          
           checked={this.state.checked4}
           onPress={() => this.setState({checked4: !this.state.checked4})}
         />
           <Text style = {{ marginTop:height*0.021,marginRight: width*0.05,marginLeft:width*0.02}}>Relevancee </Text>
           
             </View>
             <Divider orientation="horizontal" />

           
             <View style = {{ flexDirection :"row", flex: 0.1,marginBottom:-20, marginTop: -10}}>
              
              <CheckBox
              uncheckedColor = "green"
              checkedColor = "green"

           
          
           checked={this.state.checked4}
           onPress={() => this.setState({checked4: !this.state.checked4})}
         />
           <Text style = {{ marginTop:height*0.021,marginRight: width*0.05,marginLeft:width*0.02}}>Relevancee </Text>
           
             </View>
             <Divider orientation="horizontal" />

           
             <View style = {{ flexDirection :"row", flex: 0.1,marginBottom:-20, marginTop: -10}}>
              
              <CheckBox
              uncheckedColor = "green"
              checkedColor = "green"

           
          
           checked={this.state.checked4}
           onPress={() => this.setState({checked4: !this.state.checked4})}
         />
           <Text style = {{ marginTop:height*0.021,marginRight: width*0.05,marginLeft:width*0.02}}>Relevancee </Text>
           
             </View>
             <Divider orientation="horizontal" />
             <View style = {{ flexDirection :"row", flex: 0.1,marginBottom:-20, marginTop: -10}}>
              
              <CheckBox
              uncheckedColor = "green"
              checkedColor = "green"

           
          
           checked={this.state.checked4}
           onPress={() => this.setState({checked4: !this.state.checked4})}
         />
           <Text style = {{ marginTop:height*0.021,marginRight: width*0.05,marginLeft:width*0.02}}>Relevancee </Text>
           
             </View>
             <Divider orientation="horizontal" />
             
             <View style = {{ flexDirection :"row", flex: 0.1,marginBottom:-20, marginTop: -10}}>
              
              <CheckBox
              uncheckedColor = "green"
              checkedColor = "green"

           
          
           checked={this.state.checked4}
           onPress={() => this.setState({checked4: !this.state.checked4})}
         />
           <Text style = {{ marginTop:height*0.021,marginRight: width*0.05,marginLeft:width*0.02}}>Relevancee </Text>
           
             </View>
             <Divider orientation="horizontal" />
             
             <View style = {{ flexDirection :"row", flex: 0.1,marginBottom:-20, marginTop: -10}}>
              
              <CheckBox
              uncheckedColor = "green"
              checkedColor = "green"

           
          
           checked={this.state.checked4}
           onPress={() => this.setState({checked4: !this.state.checked4})}
         />
           <Text style = {{ marginTop:height*0.021,marginRight: width*0.05,marginLeft:width*0.02}}>Relevancee </Text>
           
             </View>
             <Divider orientation="horizontal" />
             
             

           




             



            </View>

            <View style = {{ marginBottom: 100,backgroundColor: "#E8E0D9", height: height*0.07, width: width, flexDirection: "row" , justifyContent: "space-between"}}>
              

              <Text style = {{marginLeft: width*0.03, fontWeight:"bold",marginTop: height*0.01}}> Budget(per person) </Text>
              <TouchableOpacity>

                <Text style = {{marginRight: width*0.03, fontWeight:"bold",marginTop: height*0.01}}> CLEAR </Text>
              </TouchableOpacity>

              


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
   modal2: {  
  flex:1,
    flexDirection: 'column',  
    
    
    width: "100%",  
    backgroundColor:"white" ,
    
 
    
      
     
     },  

}
export default CountryDetail;