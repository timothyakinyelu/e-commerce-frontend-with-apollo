import React from 'react';
import '../../styles/header.css';

import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES } from '../../graphql/queries/categories';
import { Category } from '../../graphql';
import { useWindowResize } from '../../../useWindowResize';
import { Form } from 'react-bootstrap';

const Navbar = (): JSX.Element => {
    const { 
        data, 
        loading, 
        error
    } = useQuery(GET_CATEGORIES, { fetchPolicy: "cache-first" });
    const { width } = useWindowResize();

    const headerB = document.getElementById('bottomHeader') as HTMLElement;

    if(headerB) {
        if(width < 992) {
            headerB.classList.replace('container', 'container-fluid');
        } else {
            headerB.classList.replace('container-fluid', 'container');
        }
    } 

    const toggleBurger = (e: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
        e.preventDefault();

        const burger = document.querySelector('.bars') as HTMLElement;
        const sidebar = document.querySelector('.menu-sidebar') as HTMLElement;

        if(burger) {
            burger.classList.toggle('clicked');
            sidebar.classList.toggle('open');
        }
    }

    const toggleSearch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();

        const search = document.querySelector('.mobile-search-icon') as HTMLElement;
        const searchForm = document.querySelector('.mobile-form') as HTMLElement;
        if(search) {
            searchForm.classList.toggle('in');
        }
    }

    const toggleCollapse = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
        e.preventDefault();

        const stringID = e.currentTarget.dataset.id;
        const item: Element | null = document.body.querySelector(`li[data-id=${stringID}]`);
        item?.classList.toggle('active');
        
        if(item?.classList.contains('active')) {
            item.getElementsByTagName('span')[0].style.display = 'none';
            item.getElementsByTagName('span')[1].style.display = 'block';
            item.getElementsByTagName('div')[0].classList.add('show');
        } else {
            item!.getElementsByTagName('span')[0].style.display = 'block';
            item!.getElementsByTagName('span')[1].style.display = 'none';
            item!.getElementsByTagName('div')[0].classList.remove('show');
        }
    }

    if (loading) return <p>...Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const menuList = () => {
        if(data.parents === undefined) return;

        if(data.parents) {
            return data.parents.map((parent: Category) => (
                <li className="parent" key={parent.id}>
                    <a href="Catagori.html">{ parent.name }</a>
                    { (parent.children !== []) ?
                        (
                            <div className="submenu-wrapper">
                                <ul id="list">
                                    <li>
                                        <h2 id="catalog" className="">
                                            <span>CATALOG</span>
                                        </h2>
                                        <ul className="submenu-wrapper-inner">
                                            { parent.children.map((cat: Category) => (
                                                <li key={cat.id}>
                                                    <a href="product_list.html">{cat.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>
                                        <h2 id="catalog" className="">
                                            <span>BRANDS</span>
                                        </h2>
                                        <ul className="submenu-wrapper-inner">
                                            {  
                                                parent.products.map((e) => e['brand_id'])
                                                .map((e, i, final) => final.indexOf(e) === i && i)
                                                .filter((e: any) => parent.products[e]).map((e: any) => parent.products[e])
                                                .map(x => (
                                                    <li key={x.brand.id}>
                                                        <a href="product_list.html">{x.brand.name}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        ) : ''
                    }
                </li>
            ))
        }
    }

    return (
        <header>
            <div className="headerContainer">
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
                    { width < 992 && (
                        <div className="logo-brand">
                            <div className="logo">
                                <a href="index.html">
                                    <h3>e-market</h3>
                                    {/* <img src="assets/img/logo/logo.png" alt="" /> */}
                                </a>
                            </div>
                        </div>
                    )}
                        <div id="bottomHeader" className="container">
                            <div className="navigation-menu row align-items-center">
                                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-5">
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li className="hot parent">
                                                    <a href="#latest">New Arrivals</a>
                                                    <div className="submenu-wrapper">
                                                        <ul id="list" className="list-arrival">
                                                            <li><a href="product_list.html"> Product list</a></li>
                                                            <li><a href="single-product.html"> Product Details</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                { menuList() }
                                            </ul>
                                        </nav>
                                    </div>
                                    {
                                        width < 992 && (
                                            <div className="nav-menu">
                                                <ul className="menu-sidebar">
                                                    <li><a href="#home">Home</a></li>
                                                    <li className="hot parent" onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => toggleCollapse(e)} data-toggle="collapse" data-target="#demo" data-id="navItem0">
                                                        <a href="#latest">
                                                            New Arrivals
                                                            <span className="arrow">+</span>
                                                            <span className="arrow" style={{display: 'none'}}>-</span>
                                                        </a>
                                                        <div id="demo" className="collapse">
                                                            <ul id="list" className="list-arrival">
                                                                <li>
                                                                    <a href="product_list.html"> Product list</a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html"> Product Details</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    {
                                                        data.parents.map((parent: Category) => (
                                                            <li className="parent" key={parent.id} onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => toggleCollapse(e)} data-id={"navItem" + parent.id}>
                                                                <a href="Catagori.html" tabIndex={Number("0")} data-toggle="collapse" data-target="#demo">
                                                                    { parent.name }
                                                                    {
                                                                        parent.children.length > 0 && (
                                                                            <>
                                                                                <span className="arrow">+</span>
                                                                                <span className="arrow" style={{display: 'none'}}>-</span>
                                                                            </>
                                                                        )
                                                                    }
                                                                </a>
                                                                <div id="demo" className="collapse">
                                                                    <ul id="list">
                                                                        <li>
                                                                            <ul className="submenu-wrapper-inner">
                                                                                { parent.children.map((cat: Category) => (
                                                                                    <li key={cat.id}>
                                                                                        <a href="product_list.html">{cat.name}</a>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="col-xl-4 col-lg-3 col-md-3 col-sm-3 fix-card">
                                    <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                                        <li className="search-box">
                                            <div className="form-box f-right ">
                                                <Form>
                                                    <Form.Control type="text" name="Search" placeholder="Search store"  />
                                                </Form>
                                                <div className="search-icon">
                                                    <i className="mdi mdi-magnify special-tag"></i>
                                                </div>
                                            </div>
                                        </li>
                                        {
                                            width < 769 && (
                                                <li className="search-box-mobile">
                                                    <div className="form-box f-right ">
                                                        <div className="mobile-search-icon" onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => toggleSearch(e)}>
                                                            <i className="mdi mdi-magnify special-tag"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        <li className="">
                                            <div className="wishlist">
                                                <a href="cart.html">
                                                    <i className="mdi mdi-heart-outline"></i>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="bag">
                                                <a href="cart.html">
                                                    <i className="mdi mdi-shopping-outline"></i>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {
                                    width < 769 && (
                                        <div className="mobile-form dropOut ">
                                            <div className="triangle"></div>
                                            <Form className="search-input-form">
                                                <Form.Control type="text" name="Search" placeholder="Search store"  />
                                                <i className="mdi mdi-magnify special-tag"></i>
                                            </Form>
                                        </div>
                                    )
                                }
                                { width < 992 && (
                                    <div className="trigger">
                                        <svg className="bars" viewBox="0 0 100 100" onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void => toggleBurger(e)}>
                                        <path className="line top" d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
                                        <path className="line middle" d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
                                        <path className="line bottom" d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;