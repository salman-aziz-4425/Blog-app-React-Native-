import React from 'react';
import { View, Text,Image,StyleSheet, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import Comments from '../componenets/Comments';
export default function Details({ navigation }) {
    const image = { uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"};
    return (
    <View style={{backgroundColor:'#3B3A3A',flex:1}}>
        <View style={{backgroundColor:"#1B2130",padding:35,flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
            <View style={{flexDirection:"row",right:10}}>
            <AntDesign name="left" size={24} color="white" style={{top:20,right:20}}/>
            <Text style={{color:"white",fontWeight:"bold",top:23,right:20}}>Blog</Text>
            </View>
            </TouchableOpacity>
        <Text style={{color:"white",left:90,fontWeight:"bold",top:23}}>BLOG</Text>
      </View>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.line}>
     </View>
     <Text style={{margin:10,color:"white",fontWeight:"bold",fontSize:20}}>Day1...Built my first app</Text>
     <View style={styles.line}>
     </View>
     <View style={{margin:10,font:"white"}}>
      <Text style={{color:"white"}}>Feb. 7, 2021</Text>
      <Text style={{color:"white",top:4}}>Feb. 7, 2021
I added functionality to the Other Posts portion of the detail page.
Also, I fixed a glitch where the comment section would flicker every time a new comment was added. This was because I wasn't properly handling my subscriptions from my Firestore streams. But all good now :D
Anyways, that is pretty much it for the main portions of the blog! it's so awesome to see everything finally come together.
To be honest it was a pretty lazy day, not to mention super bowl sunday.</Text>
     </View>
     <View style={styles.line}>
     </View>
     <Text style={{margin:7,color:"white",fontWeight:"bold",fontSize:25}}>Comments</Text>
     <View style={styles.line}>
     </View>
      <ScrollView>
        
        <Comments/>
      </ScrollView>
      <View style={{flex:1,alignItems:"flex-end",margin:13,top:10}}>
        <ImageBackground style={{color:"black"}}>
          <View style={{height:30}}>
          </View>
        </ImageBackground>
      </View>
     </View>
     
  );
}


const styles=StyleSheet.create({
  line:{
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image:{
    backgroundColor:'rgba(0,0,0,1)',
    height:200,
    margin:10,
    opacity:0.5,
    borderRadius:10,
  },
}
)

