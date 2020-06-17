import React, { createContext, useEffect, useState, useCallback } from "react";

import * as Network from "expo-network";

export const Context = createContext(null);

const Provider = ({children}) => {
  const [macAddresState, setMacAddres] = useState("");

  const getMacAddres = useCallback(async () => {
    const mac = await Network.getMacAddressAsync();
    setMacAddres(mac);
  }, [setMacAddres, macAddresState]);

  useEffect(() => {
    getMacAddres();
  }, []);

  return (
    <Context.Provider value={{ macAddresState }}>{children}</Context.Provider>
  );
};

export default Provider;
