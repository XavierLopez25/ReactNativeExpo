import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  "checking" = "checking",
  "authenticated" = "authenticated",
  "not-authenticated" = "not-authenticated",
}

interface User {
  name: string;
  email: string;
}

interface AuthState {
  status: AuthStatus;
  token?: string;

  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;

  loginWithEmailPassword: (email: string, password: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus["not-authenticated"]);
    }, 1500);
  }, []);

  const loginWithEmailPassword = (email: string, password: string) => {
    console.log(password);
    setUser({
      name: "Nathan López",
      email: email,
    });
    setStatus(AuthStatus.authenticated);
  };

  const logOut = () => {
    setUser({
      name: "",
      email: "",
    });
    setStatus(AuthStatus["not-authenticated"]);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,

        //Getter
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,

        //Method
        loginWithEmailPassword,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
