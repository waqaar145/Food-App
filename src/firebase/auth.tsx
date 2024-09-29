import auth from "@react-native-firebase/auth";
import { getErrorMessage } from "@/utils/error";

export const Auth = {
  sendOtp: async (mobileNumber: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(mobileNumber);
      return confirmation;
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  },
};
