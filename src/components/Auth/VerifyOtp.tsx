import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

interface VerifyOtpProps {
  handleVerifyOtp: () => void;
  otp: string;
  setOtp: (otp: string) => void;
}

const VerifyOtp: React.FC<VerifyOtpProps> = ({
  handleVerifyOtp,
  otp,
  setOtp,
}) => {

  const [currentOtp, setCurrentOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (text, index) => {
    const newOtp: string[] = [...currentOtp];
    newOtp[index] = text;
    if (text && index < 5) {
      newOtp[index + 1] = '';
    }
    setCurrentOtp(newOtp);
  };

  const handleSubmit = () => {
    const enteredOtp = currentOtp.join('');
    setOtp(enteredOtp);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {currentOtp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.otpInput}
            mode="outlined"
            theme={{ colors: { primary: '#6200ee' } }} // Customize primary color
          />
        ))}
      </View>
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Verify OTP
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
});

export default VerifyOtp;
