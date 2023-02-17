import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import ReelScreen from './screens/Reel';
import SearchScreen from './screens/Search';
import ShopScreen from './screens/Shop';

const Tab = createBottomTabNavigator();

function Screens() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false
        }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen} />
            <Tab.Screen
                name="Reel"
                component={ReelScreen} />
            <Tab.Screen
                name="Shop"
                component={ShopScreen} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default Screens