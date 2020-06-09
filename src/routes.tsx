import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Navbar from './Shop/reusables/Navigation/Navbar';
import Main from './Shop/pages/Main';
import Category from './Shop/pages/Category';
import WishList from './Shop/components/products/WishList';
import ProductInfo from './Shop/pages/ProductInfo';

const Routes = (): JSX.Element => {
    return (
        <>
            <Switch>
                <Route path="/" component={ShopComponent} />
                <Route path="/admin" component={AdminComponent} />
            </Switch>
        </>
    );
};

const ShopComponent = () => {
    return (
        <>
            <Navbar />
            <main>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/shop/cat/:catName/:catID/" component={Category} />
                    <Route path="/shop/cat/:catName/:catID/:productName/:productID" component={ProductInfo} />
                    <Route path="/shop/wishlist" component={WishList} />
                </Switch>
            </main>
        </>
    );
}

const AdminComponent = () => {
    return (
        <>
            <h2>Admin Section</h2>
        </>
    );
}

export default Routes;