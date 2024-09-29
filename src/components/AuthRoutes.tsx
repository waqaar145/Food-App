import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "@/contexts/AuthContext";
import routes from "@/routes";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map(route => {
          const shouldRender = isAuthenticated
            ? route.isProtected
            : !route.isProtected;
          return (
            shouldRender && (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
                options={route.options || {}}
              />
            )
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
