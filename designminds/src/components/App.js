import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Inicio from '../views/home';

function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Inicio}/>
        </Switch>
        </BrowserRouter>
    );
}
export default App;