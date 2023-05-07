'use client';

import { get } from 'http';
import React, { createContext, useReducer } from 'react';

type UserAction = { type: 'SET_NAME'; payload: string } | { type: 'SET_BIRTHDAY'; payload: string };

interface UserState {
  name: string;
  birthday: string;
}

interface UserContextValue {
  user: UserState;
  dispatch: React.Dispatch<UserAction>;
}

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_NAME':
      const newStateWithName = { ...state, name: action.payload };
      localStorage.setItem('user', JSON.stringify(newStateWithName));
      return newStateWithName;
    case 'SET_BIRTHDAY':
      const newStateWithBirthday = { ...state, birthday: action.payload };
      localStorage.setItem('user', JSON.stringify(newStateWithBirthday));
      return newStateWithBirthday;
    default:
      return state;
  }
};

const getInitialUserState = (): UserState => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }
  return { name: '', birthday: '' };
};

const UserContext = createContext<UserContextValue>({
  user: getInitialUserState(),
  dispatch: () => null,
});

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, getInitialUserState());

  const contextValue: UserContextValue = {
    user: state,
    dispatch,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
