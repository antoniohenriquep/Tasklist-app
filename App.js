import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import api from './src/services/api';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

export default function App()
{
  return(
    //<Login/>
    <Signup/>
  )
}