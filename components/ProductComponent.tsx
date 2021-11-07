import React, { useState, useRef } from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { IProduct } from '../screens/TabThreeScreen';
import { Text, View } from './Themed';
import { Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';
import Animated from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductComponent( props: IProduct) {

  const [ isProductSelected, setIsProductSelected ] = useState(false);

  const renderTextAndButton = () => {
    return <View style={styles.textButtonContainer}>
      <View style={styles.textsContainer}>
        <Text>{props.name}</Text>
        <Text>{props.type}</Text>
        <Text>{props.brand}</Text>
        <Text>{props.stock}</Text>
     </View>
     <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Text>
        <FontAwesome size={30} name={'shopping-cart'} color={Colors.dark.white}/>
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  }

  return (
   <Pressable 
   onPress={()=>setIsProductSelected(!isProductSelected)}>
      <View style={[styles.container, isProductSelected ? styles.containerSelected : null]}
      
      
      
      
      >
        <MotiView style={{flex:1}}
         animate={{ 
          transform: [
            { scale: isProductSelected ? 1 : 1.4}, 
            { translateX: isProductSelected ? 0: 50 }],
    
         }}
        
        >
          
          <View style={[{flex:1}]}
            
          >
            <ImageBackground
            style={[styles.image, isProductSelected ? styles.imageSelected : null]}
            source={ {uri: props.image }}
          >
            <MotiView style={{flex:1,
               backgroundColor: isProductSelected ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.3)',
                }}>
              <Text style={{
                fontSize:22,
                color: Colors.dark.white,
                textShadowColor: Colors.dark.black,
                textShadowOffset: {width:3,height:3},
                textShadowRadius: 20,

                fontWeight: 'bold',
                shadowRadius:20,
                textAlignVertical:'center',
                padding:20

              }}>
                {props.name}
              </Text>
            </MotiView>
            
            </ImageBackground>
          </View>
        </MotiView>
    {
      isProductSelected ? renderTextAndButton() : null
    }
     
    </View>
    
   </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: windowHeight/5,
    backgroundColor: Colors.dark.black,
    paddingStart:6,
    paddingVertical:3,
    flexDirection:'row',
    
  },
  containerSelected: {
    height: windowHeight/3,
    opacity: 1,
  },
  image:{
      flex:1.5,
      borderTopStartRadius: 15,
      borderBottomStartRadius: 15,
  },
  imageSelected:{
    borderTopStartRadius: 15,
      borderBottomStartRadius: 15,
  },
  text: {
      flex:1,
  },
  textsContainer: {
      flex:1,
  },
  button:{
    flexGrow:1,
  },
  buttonContainer:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'purple',
  },
  textButtonContainer:{
    flex:1,
    flexDirection: 'row'
  },
  darkness: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex:1,
    borderTopStartRadius:15,
    borderBottomStartRadius: 15,
  },
});
