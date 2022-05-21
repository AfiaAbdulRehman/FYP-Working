
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TouchableOpacity,Image,ScreenContainer,View, Text, Button} from 'react-native';
import Dashboard from './screens/Dashboard';
import Chat from './screens/Chat';
import { LogBox } from 'react-native';
import Details from './screens/Details';
import About from './screens/About';
import Profile from './screens/Profile';
import Blog from './screens/Blog';
import Splash from './screens/Splash';
import SignIn from './screens/SignIn';
import styles from './screens/DashboardStyles.js';
import * as Font from 'expo-font';
import UserData from './assets/data/UserData';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Ignore log notification by message
LogBox.ignoreLogs(['new NativeEventEmitter']); 
//Ignore all log notifications
LogBox.ignoreAllLogs();


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SignInStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();


const HomeStackScreen =() => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Dashboard" component={Dashboard } options={{
            headerShown: false,
          }}/>
    <HomeStack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="Blog"
          component={Blog}
          options={{
            headerShown : false,
           }}
        />
        <HomeStack.Screen
          name="SignIn"
          component={SignIn}
          options={{
           headerShown : false,
          }}
        />
       
    </HomeStack.Navigator>
);

const ChatStackScreen =() => (
  <ChatStack.Navigator>
    <ChatStack.Screen name="Chat" component={Chat} options={{
            headerShown: false,
          }} />
    </ChatStack.Navigator>
);
const ProfileStackScreen =() => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile"  component={Profile} options={{
            headerShown: false,
          }}/>
    </ProfileStack.Navigator>
);
const SignInStackScreen =() => (
  <SignInStack.Navigator>
    <SignInStack.Screen name="SignIn" component={SignIn} options={{
            headerShown: false,
          }}/>
    </SignInStack.Navigator>
);

const TabLayout = () => (
  <Tabs.Navigator>
      <Tabs.Screen name="Dashboard" component={HomeStackScreen} options={{
        headerShown : false,
            
              tabBarLabel: 'Dashboard',
              tabBarIcon: () => (
                <Image style = {styles.icon2} source = {require('./assets/home.png')}/>
              )
         
          }} />
          <Tabs.Screen name="Profile" component={ProfileStackScreen} options={{
             title: 'Profile',
             headerStyle: {
              backgroundColor: '#9B1454',
              
             },
             headerTitleStyle :{ color : '#FAEAEB' ,},
             tabBarIcon: () => (
               <Image style = {styles.icon2} source = {require('./assets/profile.png')}/>
             )
          }}/>
     
      
      <Tabs.Screen name="Chat" component={ChatStackScreen} options={{
          title: 'Chat',
          headerTitleStyle :{ color : '#FAEAEB' ,},
          headerStyle: {
            backgroundColor: '#9B1454',
           
            
          },
          headerLeft: () => <Image style = {styles.backicon} source = {require('./assets/back.png')} />,
          tabBarLabel: 'Chat',
          tabBarIcon: () => (
            <Image style = {styles.icon2} source = {require('./assets/chatlogo1.png')}/>
          )
         
          }} />
           <Tabs.Screen name="SignIn" component={SignInStackScreen} options={{
             title: 'Signout',
             headerStyle: {
              backgroundColor: '#9B1454',
             },
             tabBarLabel: 'Signout',
              tabBarIcon: () => (
                <Image style = {styles.icon2} source = {require('./assets/signout.png')}/>
              )
          }}/>


    </Tabs.Navigator>
  
);
const App = () => {
  
  const [userToken, setUserToken] = React.useState('afia');
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
  setTimeout(()=> {
    setIsLoading(false);
  },1000)
      },[]);
      if (isLoading) {
        return <Splash/>
      }
  
    return (
      <NavigationContainer>
        
        {userToken? (
        <TabLayout/>
     
        ) : (<SignIn/>) }

      </NavigationContainer>
    );
 
  
}
export default App;