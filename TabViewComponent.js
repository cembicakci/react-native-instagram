import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from "react-native";
import PhotosProfile from "./components/PhotosProfile";
import { Grid, UserPin } from "./Icons";
import { G } from "react-native-svg";

const Tab = createMaterialTopTabNavigator();

function LabeledPhotos() {
    return (
        <Text>Labeled Photos</Text>
    )
}

function TabViewComponent() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen name="Photos"
                component={PhotosProfile}
                options={{
                    tabBarIcon: () => {
                        return <Grid size={30} fill={'#000'} />
                    }
                }}
            />
            <Tab.Screen name="LabeledPhotos"
                component={LabeledPhotos}
                options={{
                    tabBarIcon: () => {
                        return <UserPin size={30} fill={'#000'} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default TabViewComponent