import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';


export default function App()
{
  //useEffect(()=>{console.log('Ola mundo')},[])
  return(
    <NavigationContainer>
      <AuthProvider>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}