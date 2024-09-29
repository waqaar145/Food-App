import { View, StyleSheet } from "react-native";
import { TextInput, Button, Surface, Text } from "react-native-paper";
import IndianFlag from "@/assets/svgs/India-Flag.svg";

interface InputMobileProps {
  handleLogin: () => void;
  phoneNumber: string;
  setPhoneNumber: (newPhoneNumber: string) => void;
}

const InputMobile: React.FC<InputMobileProps> = ({
  handleLogin,
  phoneNumber,
  setPhoneNumber,
}) => {
  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          label="Mobile Number"
          mode="outlined"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          maxLength={10}
          style={styles.input}
          placeholder="Enter your mobile number"
          left={
            <TextInput.Icon
              icon={() => <IndianFlag width={30} height={30} />}
              style={styles.flagIcon}
            />
          }
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={styles.buttonLabel}>
          Send OTP
        </Button>
      </Surface>
    </View>
  );
};

export default InputMobile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  surface: {
    padding: 20,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6200ee",
    borderRadius: 25,
    paddingVertical: 10,
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  flagIcon: {
    marginBottom: 10,
  },
});
