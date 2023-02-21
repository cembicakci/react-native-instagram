import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import ReelScreen from './screens/Reel';
import SearchScreen from './screens/Search';
import ShopScreen from './screens/Shop';
import MessagesScreen from './screens/Messages';
import NotificationsScreen from './screens/Notifications';

// Icons
import { Home, HomeFilled, PenToSquare, Reel, ReelFilled, Search, SearchFilled, Shop, ShopFilled, VideoPlus } from './Icons';
import ProfileDetail from './components/ProfileDetail';
import Button from './components/Button';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { borderBottomWidth: 0 }
            }}
        >
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='MessagesScreen'
                component={MessagesScreen}
                options={{
                    headerTitle: '',
                    headerBackTitle: 'cmbicakci',
                    headerTintColor: '#000',
                    headerShadowVisible: false, // applied here
                    headerBackTitleStyle: {
                        fontSize: 22,
                    },
                    headerRight: () => {
                        return (
                            <>
                                <TouchableOpacity activeOpacity={0.7} style={{ marginRight: 20 }}>
                                    <VideoPlus size={36} fill={'#000'} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <PenToSquare size={22} fill={'#000'} />
                                </TouchableOpacity>
                            </>
                        )
                    }
                }}
            />
            <Stack.Screen
                name='NotificationsScreen'
                component={NotificationsScreen}
                options={{
                    headerTitle: '',
                    headerBackTitle: 'Notifications',
                    headerTintColor: '#000',
                    headerShadowVisible: false, // applied here
                    headerBackTitleStyle: {
                        fontSize: 24,
                    }
                }}
            />
        </Stack.Navigator>
    )
}

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='ProfileDetail'
                component={ProfileDetail}
                options={{
                    headerTitle: 'Posts',
                    headerBackTitle: ''
                }}
            />
        </Stack.Navigator>
    )
}

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
                component={HomeStack}
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
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => (
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