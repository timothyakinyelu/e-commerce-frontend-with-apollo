import React from 'react'

const AuthBar: React.FC = (): JSX.Element => {
    return (
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
    );
}

export default AuthBar;