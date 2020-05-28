import React from 'react'
import { Category } from '../graphql';

interface MenuProps {
    parents: Category[];
    toggleCollapse: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const Menu: React.FC<MenuProps> = (props): JSX.Element => {
    const { parents, toggleCollapse } = props;
    
    return (
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
                    parents.map((parent: Category) => (
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
    );
}

export default Menu;