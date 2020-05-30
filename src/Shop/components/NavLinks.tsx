import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MiniCart from './cart/MiniCart';

interface NavLinksProps {
    list: any;
}

const NavLinks: React.FC<NavLinksProps> = (props): JSX.Element => {
    const { list } = props; 

    return (
        <Fragment>
            <li className="">
                <div className="wishlist">
                    {
                        list.wishListItems.length > 0 && 
                        <span className="badge badge-secondary">
                            { list.wishListItems.length }
                        </span>
                    }
                    <Link to="/shop/wishlist">
                        <i className="mdi mdi-heart-outline"></i>
                    </Link>
                </div>
            </li>
            <li>
                <div className="bag">
                    <a className="bag-link" href="cart.html">
                        <i className="mdi mdi-shopping-outline"></i>
                    </a>
                    <MiniCart />
                </div>
            </li>
        </Fragment>
    )
};

export default NavLinks;
