import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Navbar from './Shop/reusables/Navigation/Navbar';
import Main from './Shop/pages/Main';

const Routes = (): JSX.Element => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={ShopComponent} />
                <Route exact path="/admin" component={AdminComponent} />
            </Switch>
        </>
    );
};

const ShopComponent = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </>
    );
}

const AdminComponent = (): JSX.Element => {
    return (
        <>
            <h2>Admin Section</h2>
        </>
    );
}

export default Routes;