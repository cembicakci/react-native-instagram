import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import ReelScreen from './screens/Reel';
import SearchScreen from './screens/Search';
import ShopScreen from './screens/Shop';

// Icons
import { Home, HomeFilled, Reel, ReelFilled, Search, SearchFilled, Shop, ShopFilled } from './icons';

const Tab = createBottomTabNavigator();

function Screens() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#262626'
        }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused) {
                            return <HomeFilled size={30} fill={color} />
                        }

                        return <Home size={30} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused) {
                            return <SearchFilled size={30} fill={color} />
                        }

                        return <Search size={30} fill={color} />
                    }
                }} />
            <Tab.Screen
                name="Reel"
                component={ReelScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused) {
                            return <ReelFilled size={30} fill={color} />
                        }

                        return <Reel size={30} fill={color} />
                    }
                }} />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused) {
                            return <ShopFilled size={30} fill={color} />
                        }

                        return <Shop size={30} fill={color} />
                    }
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            style={[styles.avatar, {
                                borderColor: focused ? '#000' : 'transparent'
                            }]}
                            source={{ uri: 'https://pbs.twimg.com/profile_images/1295728524490350592/li5FAiq7_400x400.jpg' }}
                        />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default Screens

const styles = StyleSheet.create({
    avatar: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 24
    }
})