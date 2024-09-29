import { setKeyChainValue, getKeyChainValue, deleteKeyChainValue } from "./../utils/keyChain";
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  handleLoginSuccess: (token: string, userCredential: any) => Promise<boolean>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getKeyChainValue("token", "tokenService");
      const uid = await getKeyChainValue("uid", "uidService");
      if (token && uid) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleLoginSuccess = async (token: string, userCredential: any) => {
    await setKeyChainValue("token", token, "tokenService");
    await setKeyChainValue("uid", userCredential?.user?.uid, "uidService");
    setIsAuthenticated(true);
    return true;
  };

  const handleLogout = async () => {
    await deleteKeyChainValue("tokenService");
    await deleteKeyChainValue("uidService");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLoginSuccess, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
