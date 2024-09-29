import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/contexts/AuthContext";
import AuthRoutes from "./src/components/AuthRoutes";

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  );
}

export default App;
