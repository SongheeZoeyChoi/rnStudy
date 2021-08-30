import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens 
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

/*
stack 구조 
    Stack Navigator 
        - Stack Screen A

    Stack Navigator 
        - Tab Navigator 
            - Stack Screen A
            - Stack Screen B
*/ 

const isLoggedIn = true;