import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { IProduct } from '../screens/TabThreeScreen';
import { Text, View } from './Themed';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductComponent( props: IProduct) {
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        source={ {uri: props.image }}
      />
     <View style={styles.textsContainer}>
        <Text>{props.name}</Text>
        <Text>{props.type}</Text>
        <Text>{props.brand}</Text>
        <Text>{props.stock}</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: windowHeight/4,
    backgroundColor: Colors.dark.lightRed,
    padding:10,
    flexDirection:'row',
  },
  image:{
      flex:1,
      backgroundColor: Colors.dark.lightBlue
  },
  text: {
      flex:1,
      backgroundColor: Colors.dark.white
  },
  textsContainer: {
      flex:1,
      backgroundColor: 'green',
  }
});
