import React from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';

export default function Comments() {
    const image={uri:"/Applications/XAMPP/xamppfiles/htdocs/ReactNative/Blog-app/componenets/Profile.jpeg"}
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={{height:50,width:50,borderRadius:30}}></Image>
      </View>
      <View style={{paddingLeft:20}}>
        <Text style={{color:"white"}}>Salman aziz</Text>
        <Text style={{color:"white",fontSize:18}}>HI</Text>
      </View>
     </View>
  );
}

const styles=StyleSheet.create({
    container:{
        margin:10,
        display: 'flex',
        flexDirection:"row",
    }
})