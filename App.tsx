import React from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const NStack = createNativeStackNavigator();
const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate('DETAILS');
        }}></Button>
    </View>
  );
};

const Details = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInput style={{backgroundColor: 'lime', height: 40}} autoFocus></TextInput>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
    <Text style={{textAlign: 'center', fontSize: 20, color:'black'}}>JS Navigation</Text>
    <NavigationContainer>
      <Stack.Navigator detachInactiveScreens={false}>
        <Stack.Screen component={Home} name="HOME"></Stack.Screen>
        <Stack.Screen component={Details} name="DETAILS"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    <Text style={{textAlign: 'center', fontSize: 20, color:'black'}}>Native Navigation</Text>
    <NavigationContainer>
      <NStack.Navigator>
        <NStack.Screen component={Home} name="HOME"></NStack.Screen>
        <NStack.Screen component={Details} name="DETAILS"></NStack.Screen>
      </NStack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
