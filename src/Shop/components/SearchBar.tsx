import React, { Fragment } from 'react'
import { useWindowResize } from '../../useWindowResize';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface SearchBarProps {
    list: any;
    toggleSearch: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props): JSX.Element => {
    const { list, toggleSearch } = props;
    const { width } = useWindowResize();
    
    return (
        <Fragment>
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
                            <span className="badge badge-secondary">
                                { list.wishListItems.length }
                            </span>
                            <Link to="/shop/wishlist">
                                <i className="mdi mdi-heart-outline"></i>
                            </Link>
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
        </Fragment>
    );
}

export default SearchBar;