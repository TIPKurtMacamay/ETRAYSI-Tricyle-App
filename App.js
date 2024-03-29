// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./components/SplashScreen";
import AdditionalSplashScreen from "./components/AdditionalSplashScreen";
import HomeScreen from "./pages/HomeScreen";
import MapNavigation from "./components/MapNavigation"; // Import the MapNavigation component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdditionalSplashScreen"
          component={AdditionalSplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={MapNavigation}
          options={{ headerShown: false }}
        />

        {/* Include MapNavigation as a screen */}
        <Stack.Screen name="MapNavigation" component={MapNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
