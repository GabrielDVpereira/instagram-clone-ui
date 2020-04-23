import React from "react";
import { Image } from "react-native";
import logo from "./assets/instagram.png";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "./pages/Feed";

const StackNavigation = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <StackNavigation.Navigator
      initialRouteName="feed"
      screenOptions={{
        headerTitle: ({ style }) => (
          <Image source={logo} style={{ alignSelf: "center" }} />
        ),
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <StackNavigation.Screen name="feed" component={Feed} />
    </StackNavigation.Navigator>
  </NavigationContainer>
);

export default Routes;
