import React,{ useState } from "react";


const MyProvider = ({ children }) => {
    const [myState, setMyState] = useState("Emin");
  
    const value = {
      myState,
      setMyState,
    };
  
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
  };
  export const MyContext = React.createContext();

  export {MyProvider};
  