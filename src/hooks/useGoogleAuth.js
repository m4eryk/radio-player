import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { provider } from 'src/firebase/googleAuth';
import { app } from 'src/firebase';
import { createContext, useContext, useState } from 'react';

export const GoogleAuthContext = createContext({});

export const useAuth = () => useContext(GoogleAuthContext);

export const useGoogleAuth = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app);

  const signIn = async () => {
    const { user } = await signInWithPopup(auth, provider);

    setUser(user);
  };

  const logout = async () => {
    await signOut(auth);

    setUser(null);
  };

  return {
    signIn,
    logout,
    user,
  };
};
