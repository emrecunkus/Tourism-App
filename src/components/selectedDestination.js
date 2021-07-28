import React from 'react';
import { View, TouchableOpacity, Image, Text, Dimensions ,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get("window");


const SelectedDestination = (props) => {



    return (
        <TouchableOpacity onPress={() => Actions.push("country_detail")}>


            <ImageBackground
                source={{ uri: 'https://news.cgtn.com/news/2021-04-22/Greece-to-reopen-tourism-services-in-mid-May-ZEYMeVk5Nu/img/4b80c47e73644913a8b9274a6f27b773/4b80c47e73644913a8b9274a6f27b773.png' }}
                style={{
                    height: 150,
                    width: 170,
                    position: 'relative', // because it's parent
                    top: 2,
                    left: 2,
                    marginLeft: width * 0.05,
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
                        textAlign: "center",

                        paddingTop: height * 0.1
                    }}
                >
                    Italy
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};



export default SelectedDestination;