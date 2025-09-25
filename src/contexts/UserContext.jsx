import { createContext, useState } from 'react';


const UserContext = createContext();

function UserProvider({ children }) {
      // Create state just like you normally would in any other component
  const [user, setUser] = useState(null);

  // This is the user state and the setUser function that will update it!
  // This variable name isn't special; it's just convention to use `value`.
  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };


