import { useAuth } from "@/contexts/AuthContext";
import { Button, Text, View } from "react-native"

const Home = () => {
  const {handleLogout} = useAuth();
  return (
    <View>
      <Text>Home</Text>
      <Button title="logout" onPress={handleLogout} />
    </View>
  )
}

export default Home;