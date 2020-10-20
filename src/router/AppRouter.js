import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header.jsx';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact render={()=>(<div>Hello</div>)}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;