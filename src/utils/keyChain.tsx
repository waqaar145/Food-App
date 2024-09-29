import * as Keychain from "react-native-keychain";

// Function to set a key-value pair
export const setKeyChainValue = async (
  key: string,
  value: string,
  service: string,
) => {
  await Keychain.setGenericPassword(key, value, { service });
};

// Function to get a value by key
export const getKeyChainValue = async (
  key: string,
  service: string,
): Promise<string | null> => {
  const credentials = await Keychain.getGenericPassword({ service });
  return credentials && credentials.username === key
    ? credentials.password
    : null;
};

// Function to delete a key
export const deleteKeyChainValue = async (service: string) => {
  await Keychain.resetGenericPassword({ service });
};
