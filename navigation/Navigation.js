import React from 'react';
import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../screens/onboardingScreen';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';

const stack = createStackNavigator();

export default function Navigation() {
    return (
        <stack.Navigator headerMode='none'>
            <stack.Screen name='Onboarding' component={OnboardingScreen}/>
            <stack.Screen name='Login' component={LoginScreen}/>
            <stack.Screen name='Register' component={RegisterScreen}/>
        </stack.Navigator>
    )
}
