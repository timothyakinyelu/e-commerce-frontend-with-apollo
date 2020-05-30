import React from 'react';
import '../../styles/header.css';

import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES } from '../../graphql/queries/categories';
import { Category } from '../../graphql';
import { useWindowResize } from '../../../useWindowResize';
import { GET_WISH_ITEMS } from '../../graphql/queries/products';
import AuthBar from '../../components/AuthBar';
import Menu from '../../components/Menu';
import SearchBar from '../../components/SearchBar';
import HamBurger from '../../components/HamBurger';

const Navbar = (): JSX.Element => {
    const { 
        data, 
        loading, 
        error
    } = useQuery(GET_CATEGORIES, { fetchPolicy: "cache-first" });
    const { width } = useWindowResize();

    const { 
        data: list
    } = useQuery(GET_WISH_ITEMS);

    const headerB = document.getElementById('bottomHeader') as HTMLElement;

    // condition to check width size and toggle container
    if(headerB) {
        if(width < 992) {
            headerB.classList.replace('container', 'container-fluid');
        } else {
            headerB.classList.replace('container-fluid', 'container');
        }
    } 

    // function to open and close hamburger icon
    const toggleBurger = (e: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
        e.preventDefault();

        const burger = document.querySelector('.bars') as HTMLElement;
        const sidebar = document.querySelector('.menu-sidebar') as HTMLElement;

        if(burger) {
            burger.classList.toggle('clicked');
            sidebar.classList.toggle('open');
        }
    }

    // function to display search bar on mobile devices
    const toggleSearch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();

        const search = document.querySelector('.mobile-search-icon') as HTMLElement;
        const searchForm = document.querySelector('.mobile-form') as HTMLElement;
        if(search) {
            searchForm.classList.toggle('in');
        }
    }

    // function to toggle dropdown in mobile navbar
    const toggleCollapse = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
        e.preventDefault();

        const stringID = e.currentTarget.dataset.id;
        const item: Element | null = document.body.querySelector(`li[data-id=${stringID}]`);
        item?.classList.toggle('drop');
        
        if(item?.classList.contains('drop')) {
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
                                                parent.products.edges.map((e) => e.node['brand_id'])
                                                .map((e, i, final) => final.indexOf(e) === i && i)
                                                .filter((e: any) => parent.products.edges[e]).map((e: any) => parent.products.edges[e])
                                                .map(x => (
                                                    <li key={x.node.brand.id}>
                                                        <a href="product_list.html">{x.node.brand.name}</a>
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
                    <AuthBar />
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
                                            <Menu parents={data.parents} toggleCollapse={toggleCollapse} />
                                        )
                                    }
                                </div>
                                <SearchBar list={list} toggleSearch={toggleSearch} />
                                { width < 992 && (
                                    <HamBurger toggleBurger={toggleBurger} />
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