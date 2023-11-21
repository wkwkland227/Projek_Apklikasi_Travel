import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home';
import Login from './Login';
import register from './register';
import MemberList from './MemberList'
import landingpage from './LandingPage';
import DestinasiList from './DestinasiList';
import ProfileMemberGeorge from "./ProfileMemberGeorge";
import ProfileMemberJames from "./ProfileMemberJames";
import ProfileMemberChelsea from "./ProfileMemberChelsea";
import ListDestinasi from "./ListDestinasi";
import RajaAmpat from "./RajaAmpat";
import SetuBabakan from "./SetuBabakan";
import TreasureBayBintan from "./TreasureBayBintan";
// import DetailsScreen from './screen/detail';
// import ProfileScreen from './screen/profile';

//Mmebuat tumpukan navigasi(stack navigator) dengan menggunakan library React Navigation.
const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="register" component={register} options={{headerShown:false}}/>
        <Stack.Screen name="LandingPage" component={landingpage} options={{headerShown:false}}/>
      <Stack.Screen name="MemberList" component={MemberList} options={{headerShown:false}}/>
       <Stack.Screen name="ProfileMemberGeorge" component={ProfileMemberGeorge} options={{headerShown:false}}/>
       <Stack.Screen name="ProfileMemberJames" component={ProfileMemberJames} options={{headerShown:false}}/>
       <Stack.Screen name="ProfileMemberChelsea" component={ProfileMemberChelsea} options={{headerShown:false}}/>
       <Stack.Screen name="DestinasiList" component={DestinasiList} options={{headerShown:false}}/>
       <Stack.Screen name="ListDestinasi" component={ListDestinasi} options={{headerShown:false}}/>
       <Stack.Screen name="RajaAmpat" component={RajaAmpat} options={{headerShown:false}}/>
       <Stack.Screen name="SetuBabakan" component={SetuBabakan} options={{headerShown:false}}/>
       <Stack.Screen name="TreasureBayBintan" component={TreasureBayBintan} options={{headerShown:false}}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;