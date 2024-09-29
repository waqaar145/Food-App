declare module 'react-native-keychain' {
  export function setGenericPassword(
    username: string,
    password: string,
    options?: { service?: string; accessible?: string }
  ): Promise<void>;

  export function getGenericPassword(
    options?: { service?: string }
  ): Promise<{ username: string; password: string } | null>;

  export function resetGenericPassword(
    options?: { service?: string }
  ): Promise<boolean>;

  export function getAllGenericPasswords(): Promise<
    Array<{ username: string; password: string }>
  >;
}
