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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



export default function ProductAnimationComponent(props: IProduct) {
  const [isProductSelected, setIsProductSelected] = useState(false);

  const leftContent = () => {
    return <Text>Pull to activate</Text>;
  }

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
      

       >
        <Pressable onPress={() => setIsProductSelected(!isProductSelected)}>
          <MotiView
            style={styles.imageContainer}
            animate={{
              height: isProductSelected ? windowHeight / 3 : windowHeight / 5,

              opacity: isProductSelected ? 1 : 1,
              backgroundColor: isProductSelected ? "purple" : "pink",
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
                    scale: isProductSelected ? 1: 1.6,
                  },
                  {
                    translateX: isProductSelected ? 0 : 60,
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
              fontSize: isProductSelected ? 0 : 25,
               justifyContent:'center', alignItems:'center',
               color: Colors.dark.white,
               shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 1,
              shadowRadius: 3.84,
              shadowColor: Colors.dark.black                
            }}
              animate={ {
                transform:[
                  {
                  translateY: isProductSelected ? 0:40
                },{
                  translateX: isProductSelected ? 0: 50,
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
  },
  image: {
    flexGrow: 1,
  },
  imageInsideContainer: {
    flex: 1,
    marginRight: 5,
    marginVertical: 5,
  },
});
