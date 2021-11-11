import React, { useState } from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { IProduct } from "../screens/TabThreeScreen";
import { Dimensions } from "react-native";
import { MotiView, MotiText } from "@motify/components";
import {
  TapGestureHandler,
  RotationGestureHandler,
  Swipeable,
  TouchableOpacity
} from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



export default function ProductAnimationComponent(props: IProduct) {
  const [isProductSelected, setIsProductSelected] = useState(false);

  

  const renderLeftActions = (progress:any , dragX:any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 40],
    });
    return (
        <MotiView
          style={[
            {backgroundColor:'purple'},
            {
              transform: [{ translateX: trans },
            
              
              ],
              flexGrow:0.1,
              backgroundColor: Colors.dark.darkRed,
              opacity:1,
              justifyContent: 'center',
              alignItems: 'center'
            },
          ]}>
          <FontAwesome size={35} name={'shopping-cart'} color={Colors.dark.white} />
        </MotiView>
    );
  };
  
  const renderRightActions = (progress:any , dragX:any) => {
    const trans2 = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-100, -40, -20, 0],
    });
    return (
        <MotiView
          style={[
            {backgroundColor:'red'},
            {
              transform: [{ translateX: trans2 }],
              flexGrow:1,
              backgroundColor:'blue'
            },
          ]}>
          <Text> XD</Text>
        </MotiView>
    );
  };








const rightButtons = [
  <TouchableOpacity><Text>Button 1</Text></TouchableOpacity>,
  <TouchableOpacity><Text>Button 2</Text></TouchableOpacity>
];

const renderText = () => {
  return <Text>
    {props.name + ' ' + props.type + ' ' + props.unitPrice +  ' ' + props.stock}
  </Text>
}

  return (
      <Swipeable
      activeOffsetX={24}
      enabled={true}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}

       >
        <Pressable onPress={() => setIsProductSelected(!isProductSelected)}>
          <MotiView
            style={styles.imageContainer}
            animate={{
              height: isProductSelected ? windowHeight / 3 : windowHeight / 5,

              opacity: isProductSelected ? 1 : 1,
              backgroundColor: isProductSelected ? "purple" : Colors.dark.darkBlue,
            }}
          >
            <MotiView
              style={styles.imageInsideContainer}
              animate={{
                
                height: isProductSelected ? "100%" : windowHeight / 6,
                width: isProductSelected ? "65%" : "100%",
                borderTopRightRadius: isProductSelected ? 0 : 20,
                borderBottomRightRadius: isProductSelected ? 0 : 20,
                transform: [
                  {
                    scale: isProductSelected ? 1: 1.7,
                  },
                  {
                    translateX: isProductSelected ? 0 : 76,
                  },
                ],
                
              }}
            >
              <ImageBackground style={{
                flexGrow:1,
                opacity: isProductSelected ? 1 : 0.5,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                }} source={{uri: props.image}}>

              </ImageBackground>
             
              <MotiText style={{ 
              position:'absolute',
              fontSize: isProductSelected ? 0 : 16,
              color: Colors.dark.white,
              textShadowColor: Colors.dark.black,
              textShadowOffset: {width:2,height:2},
              textShadowRadius: 8,
              fontWeight: 'bold',
              shadowRadius: 8,       
            }}
              animate={ {
                transform:[
                  {
                  translateY: isProductSelected ? 0: 50
                },{
                  translateX: isProductSelected ? 0: 30,
                },
                ]
              }}
              >
                {props.name}
              </MotiText>
              
            </MotiView>
            <MotiView
              animate={{
                height: "100%",
                width: isProductSelected ? "35%" : "0%",
                backgroundColor: "green",
              }}
            >
              {isProductSelected ? renderText() : null}
            </MotiView>
          </MotiView>
        </Pressable>
        </Swipeable>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    marginHorizontal: 0,
    marginVertical: 5,
  },
  containerSelected: {
    height: windowHeight / 3,
    backgroundColor: "red",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "orange",
    flexDirection: "row",
    borderColor:"black",
    borderWidth:2,
  },
  image: {
    flexGrow: 1,
  },
  imageInsideContainer: {
    flex: 1,
  },
});
