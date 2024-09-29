import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Auth } from "@/firebase";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/contexts/AuthContext";
import InputMobile from "@/components/Auth/InputMobile";
import VerifyOtp from "@/components/Auth/VerifyOtp";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { handleLoginSuccess } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState<string>("8879347646");

  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const handleLogin = async () => {
    try {
      const formattedNumber = `+91${phoneNumber}`;
      const confirmation = await Auth.sendOtp(formattedNumber);
      setConfirm(confirmation);
      setIsOtpSent(true);
      Alert.alert("OTP Sent", `OTP has been sent to ${formattedNumber}`);
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP.");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    if (confirm && otp.trim().length === 6) {
      try {
        const userCredential = await confirm.confirm(otp);
        if (userCredential) {
          const token = await userCredential.user.getIdToken();
          await handleLoginSuccess(token, userCredential);
          navigation.navigate("Home" as never);
        }
      } catch (error) {
        console.error("Invalid OTP:", error);
        Alert.alert("Error", "Invalid OTP. Please try again.");
      }
    }
  };

  return (
    <View style={styles.container}>
      {!isOtpSent ? (
        <InputMobile
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          handleLogin={handleLogin}
        />
      ) : (
        <VerifyOtp 
          otp={otp}
          setOtp={setOtp}
          handleVerifyOtp={handleVerifyOtp} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: '100%', 
  },
});

export default LoginScreen;
