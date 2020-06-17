import React, { createContext, useEffect, useState, useCallback } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import Home from "./src/views/Home";
import Taks from "./src/views/Taks";
import * as Network from "expo-network";
import Provider from './src/stateGlobal/Provider';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Taks,
  })
);

export default function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}


