import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Card = () => {
  const image = { uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"};
  const navigation = useNavigation(); 
  return (
    <View>
  <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
    <View style={{justifyContent:"center"}}>
      <View style={{position: 'absolute',opacity:1,zIndex:1,alignItems:"center"}}>
      <Text style={styles.text}>Day 1</Text>
      <Text style={styles.paragraph}>Started Building my First App</Text>
      </View>
      <Image source={image} style={styles.image}></Image>
    </View>
    </TouchableOpacity>
    </View>
  )
}


const styles=StyleSheet.create({
  text:{
    color:"white",
    fontWeight:"bold",
    left:90,
    fontSize:30,
  },
  paragraph:{
    color:"white",
    left:90,
  },
  image:{
    backgroundColor:'rgba(0,0,0,1)',
    height:200,
    margin:10,
    opacity:0.5,
    borderRadius:10,
  }
}
)

export default Card