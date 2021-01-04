import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Naviagtion from './navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Naviagtion />
    </NavigationContainer>
  )
}
