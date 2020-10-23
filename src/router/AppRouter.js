import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header.jsx';
import HomeContainer from '../components/HomeContainer.jsx';

//importing route-specific components

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact render={()=>(<div>Hello</div>)}></Route>
                <Route path="/home" component={HomeContainer}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;