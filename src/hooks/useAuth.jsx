import React, { useState, useContext, createContext } from 'react';
import cookie from 'js-cookie';
import axios from 'axios';
import endPoints from 'services/api/';

const AuthContext = createContext();

// this provide a access to a global state
export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const signIn = async (email, password) => {
    try {
      const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
      if (access_token) {
        const theToken = access_token.access_token;
        cookie.set('token', theToken, { expires: 5 });

        axios.defaults.headers.Authorization = `Bearer ${theToken}`;
        const { data: user } = await axios.get(endPoints.auth.profile);
        setUser(user);
      }
    } catch (error) {
      if (error.response.status == 401) {
        alert('the user or password are incorrect');
      } else {
        console.log(error.response);
      }
    }
  };

  return {
    user,
    signIn,
  };
}
