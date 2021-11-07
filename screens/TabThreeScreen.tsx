import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductComponent from '../components/ProductComponent';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { db } from '../firebase';
import { RootTabScreenProps } from '../types';

export interface IProduct {
  id: string,
  name: string,
  type: string,
  stock: string,
  unitPrice: string,
  brand: string,
  image: string
}

const emptyArray: IProduct[] = []

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {

  const [ products, setProducts ] = useState(emptyArray);
  

  const getProductsFromDatabase = () => {
    db.collection("products")
    .get()
    .then((querySnapshot) => {
        let arrayOfProducts: IProduct[] = []
        querySnapshot.forEach((doc) => {
          
            console.log(doc.id, " => ", doc.data());
            const item: IProduct = {
              id: doc.id,
              name: doc.data().name,
              type: doc.data().type,
              stock: doc.data().stock,
              unitPrice: doc.data().unitPrice,
              brand: doc.data().brand,
              image: doc.data().image
            }
            arrayOfProducts.push(item)
         
        });
        setProducts( () => arrayOfProducts )
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }

  useEffect( () => getProductsFromDatabase(), [] );

  return (
    <View style={styles.container}>
      <ScrollView>
      {
        products.map(
          item => <ProductComponent  
          id={item.id}
          key={item.id}
          name={item.name}
          type={item.type}
          brand={item.brand}
          image={item.image}
          unitPrice={item.unitPrice}
          stock={item.unitPrice}
          />
        )
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.darkBlue,
    justifyContent:'center'
  },
  scrollViewContainer: {
    flex:1
  }
});
