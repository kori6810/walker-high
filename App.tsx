import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
// import SignupScreen from './src/screens/signup/SignupScreen';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/ToastMessage';
import TermsScreen from './src/screens/signup/TermsScreen';

const Stack = createNativeStackNavigator();

const navigatorOptions: any = {
  animation: 'fade',
  headerBackVisible: false,
  headerTitleAlign: 'center',
};

const SignupNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TermsofService" screenOptions={navigatorOptions}>
      <Stack.Screen
        name="TermsofService"
        component={TermsScreen}
      />
      
    </Stack.Navigator>
  );
};


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            animation: 'slide_from_right',
            gestureEnabled: false,
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Signup"
            options={{animation: 'slide_from_left'}}
            component={SignupNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
}
