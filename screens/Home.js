import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import Card from '../componenets/Card'
import { ScrollView } from 'react-native'
import Footer from '../componenets/HomeFooter'
const Home = () => {
  return (
    <View style={{backgroundColor:'#3B3A3A',flex:1}}>
      <View style={{backgroundColor:"#1B2130",padding:35,position:"fixed"}}>
        <Text style={{color:"white",textAlign:"center",fontWeight:"bold",top:23}}>BLOG</Text>
      </View>
      <ScrollView style={{top:10,flex:1}}>
        <Card />
      </ScrollView>
      <Footer/>
    </View>
  )
}

export default Home