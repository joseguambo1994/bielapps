import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { IProduct } from '../screens/TabThreeScreen';

import { Dimensions } from 'react-native';
import { MotiView} from '@motify/components';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductAnimationComponent( props: IProduct) {

  const [ isProductSelected, setIsProductSelected ] = useState(true);

  return (
    <Pressable onPress={() => setIsProductSelected(!isProductSelected)}>
      <MotiView
        style={styles.imageContainer}
        animate={{
          height: isProductSelected ? windowHeight / 3 : windowHeight / 6,

          opacity: isProductSelected ? 1 : 1,
          backgroundColor: isProductSelected ? "purple" : "pink",
        }}
      >
        <MotiView
          style={styles.imageInsideContainer}
          animate={{
            height: isProductSelected ? '100%' : windowHeight / 6,
            width: isProductSelected ? '65%' : '100%',
            backgroundColor: isProductSelected ? "red" : "orange",
            borderTopRightRadius: isProductSelected ? 0 : 20,
            borderBottomRightRadius: isProductSelected ? 0 : 20,
          }}
        ></MotiView>
        <MotiView
        
          animate={{
              height: '100%',
            width: isProductSelected ? '35%' : '0%',
            backgroundColor: 'green'
          }}
        ></MotiView>
      </MotiView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'blue', 
      marginHorizontal:0,
      marginVertical: 5,
  },
  containerSelected: {
    height: windowHeight/3,
    backgroundColor:'red', 
  },
  imageContainer:{
    flex:1,
    backgroundColor:'orange',
    flexDirection: 'row'
  },
  image:{
    flexGrow:1,
  },
  imageInsideContainer:{
    flex:1,
    marginRight: 5,
    marginVertical: 5,
  },
  

});
