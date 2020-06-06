import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskRegister from "./view/TaskRegister";
import Home from "./view/Home";
import QRcode from "./view/QrCode";



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={TaskRegister} />
                <Route path="/register/:id" exact component={TaskRegister} />
                <Route paht="/qrcode" exact component={QRcode} />
            </Switch>
        </BrowserRouter>


    )
}

