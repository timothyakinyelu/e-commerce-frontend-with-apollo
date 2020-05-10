import React from 'react';
import '../../styles/header.css';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_CATEGORIES = gql`
    query GetCategories {
        # categories {
        #     paginatorInfo{
        #         count
        #         hasMorePages
        #     }
        #     data {
        #         id
        #         name
        #         slug
        #     }
        # }
        parents(where: { column: PARENT, operator: IS_NULL }) {
            id
            name
        }
    }
`;

const Navbar = (): JSX.Element => {
    const { 
        data, 
        loading, 
        error
    } = useQuery(GET_CATEGORIES);

    if (loading) return <p>...Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <header>
            <div className="header-area">
                <div className="main-header ">
                    <div className="header-top top-bg d-none d-lg-block">
                        <div className="container-fluid">
                            <div className="col-xl-12">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <div className="logo">
                                            <a href="index.html">
                                                <h3>e-market</h3>
                                                {/* <img src="assets/img/logo/logo.png" alt="" /> */}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="header-selectors-wrapper">
                                        <div className="currency-selector">
                                            <select id="customerCurrency" name="customerCurrency" aria-label="Currency selector">
                                                <option value="https://demo.nopcommerce.com/changecurrency/1?returnUrl=%2F">US Dollar</option>
                                                <option value="https://demo.nopcommerce.com/changecurrency/6?returnUrl=%2F">Euro</option>
                                            </select>
                                        </div>
                                    </div>
                                    <ul>
                                        <li className="d-none d-lg-block"> 
                                            <a href="#signin" className="btn header-btn">Register</a>
                                        </li>
                                        <li className="d-none d-lg-block"> 
                                            <a href="#signin" className="btn header-btn">Sign in</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom  header-sticky sticky-bar sticky">
                        <div className="container">
                            <div className="menu-list row align-items-center">
                                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-5">
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li className="hot parent"><a href="#latest">Latest</a>
                                                    <ul className="submenu">
                                                        <li><a href="product_list.html"> Product list</a></li>
                                                        <li><a href="single-product.html"> Product Details</a></li>
                                                    </ul>
                                                </li>
                                                {data.parents &&
                                                    data.parents.map((parent: any) => (
                                                    <li className="parent" key={parent.id}><a href="Catagori.html">{ parent.name }</a></li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-3 col-md-3 col-sm-3 fix-card">
                                    <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                                        <li className="d-none d-xl-block">
                                            <div className="form-box f-right ">
                                                <input type="text" name="Search" placeholder="Search store" />
                                                <div className="search-icon">
                                                    <i className="fa fa-search special-tag"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=" d-none d-xl-block">
                                            <div className="favorit-items">
                                                <i className="mdi mdi-heart-outline"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="shopping-card">
                                                <a href="cart.html">
                                                    <i className="mdi mdi-shopping-outline"></i>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none">
                                        <div className="slicknav_menu">
                                            <a href="#menu" aria-haspopup="true" role="button" tabIndex= {Number("0")} className="slicknav_btn slicknav_collapsed" style={{ outline: "none" }}>
                                                <span className="slicknav_menutxt">MENU</span>
                                                <span className="slicknav_icon">
                                                    <span className="slicknav_icon-bar"></span>
                                                    <span className="slicknav_icon-bar"></span>
                                                    <span className="slicknav_icon-bar"></span>
                                                </span>
                                            </a>
                                            <ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: "none" }}>
                                                <li><a href="index.html" role="menuitem" tabIndex= {Number("-1")}>Home</a></li>
                                                <li><a href="Catagori.html" role="menuitem" tabIndex= {Number("-1")}>Catagori</a></li>
                                                <li className="hot slicknav_collapsed slicknav_parent">
                                                    <a href="#l" role="menuitem" aria-haspopup="true" tabIndex= {Number("-1")} className="slicknav_item slicknav_row" style= {{ outline: "none" }}>
                                                        <a href="#latest" tabIndex= {Number("-1")}>Latest</a>
                                                        <span className="slicknav_arrow">+</span>
                                                    </a>
                                                    <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
                                                        <li>
                                                            <a href="product_list.html" role="menuitem" tabIndex= {Number("-1")}> Product list</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-product.html" role="menuitem" tabIndex= {Number("-1")}> Product Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="slicknav_collapsed slicknav_parent">
                                                    <a href="#bl" role="menuitem" aria-haspopup="true" tabIndex= {Number("-1")} className="slicknav_item slicknav_row" style={{ outline: "none" }}>
                                                        <a href="blog.html" tabIndex= {Number("-1")}>Blog</a>
                                                        <span className="slicknav_arrow">+</span>
                                                    </a>
                                                    <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
                                                        <li><a href="blog.html" role="menuitem" tabIndex= {Number("-1")}>Blog</a></li>
                                                        <li>
                                                            <a href="single-blog.html" role="menuitem" tabIndex= {Number("-1")}>Blog Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="slicknav_collapsed slicknav_parent">
                                                    <a href="#PA" role="menuitem" aria-haspopup="true" tabIndex= {Number("-1")} className="slicknav_item slicknav_row" style={{ outline: "none" }}>
                                                        <a href="#page" tabIndex= {Number("-1")}>Pages</a>
                                                        <span className="slicknav_arrow">+</span>
                                                    </a>
                                                    <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
                                                        <li><a href="login.html" role="menuitem" tabIndex= {Number("-1")}>Login</a></li>
                                                        <li><a href="cart.html" role="menuitem" tabIndex= {Number("-1")}>Card</a></li>
                                                        <li><a href="elements.html" role="menuitem" tabIndex= {Number("-1")}>Element</a></li>
                                                        <li><a href="about.html" role="menuitem" tabIndex= {Number("-1")}>About</a></li>
                                                        <li><a href="confirmation.html" role="menuitem" tabIndex= {Number("-1")}>Confirmation</a></li>
                                                        <li><a href="cart.html" role="menuitem" tabIndex= {Number("-1")}>Shopping Cart</a></li>
                                                        <li><a href="checkout.html" role="menuitem" tabIndex= {Number("-1")}>Product Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html" role="menuitem" tabIndex= {Number("-1")}>Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;