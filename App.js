import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import api from './src/services/api';
import Routes from './src/routes';


export default function App()
{
  //useEffect(()=>{console.log('Ola mundo')},[])
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}