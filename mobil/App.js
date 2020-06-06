import React from 'react';
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import Home from "./src/views/Home";
import Taks from "./src/views/Taks";


const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Taks,
  })
); 
export default function App() {
  return (
      <Routes/>
  );
}


