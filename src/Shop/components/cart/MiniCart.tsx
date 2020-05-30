import React from 'react';
import '../../styles/cart.css';


const MiniCart: React.FC = (): JSX.Element => {
    return (
        <div className="shopping-bag-rollover row out">
            <div className="grid col-4">
                <div className="shopping-bag-rollover-scroll-up disabled">
                    <div className="navigation-arrow-up"></div>
                </div>
                <div className="shopping-bag-rollover-items-wrapper ">
                    <ul className="shopping-bag-rollover-items" style={{ top: "0px" }}>
                        <li className="shopping-bag-rollover-item clearfix clickable-container has-link ">
                            <a href="/en_ca/productpage.0863570003.html"> 
                                <img alt="Knit Tank Top" className="shopping-bag-rollover-item-image" height="126" width="84" src="https://lp2.hm.com/hmgoepprod%3Fset%3Dsource%5B%2Fd3%2F6e%2Fd36ebb77ea42405dfd1733af24dbbb13ae0c3761.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D%26call%3Durl%5Bfile%3A%2Fproduct%2Forder%5D" />
                            </a> 
                            <div className="shopping-bag-item-product">
                                    
                                <h3 className="product-item-headline">Knit Tank Top</h3>
                                <div id="redWhitePrices_0863570003002" className="product-item-price ">
                                    <span id="main_price" className="main_price_0863570003002">
                                        $14.99
                                    </span>
                                    <small id="white_price_0863570003002"></small>
                                </div>
                                <dl className="clearfix">
                                    <dt>Quantity:</dt>
                                    <dd>1</dd>
                                    <dt>Colour:</dt>
                                    <dd>Black</dd>
                                    <dt>Size:</dt>
                                    <dd>XS</dd>
                                </dl>
                            </div>
                            <div className="shopping-bag-item-total-price product-item-price">
                                Total:&nbsp;
                                $14.99
                            </div>
                        </li>	
                    </ul>
                </div>
                <div className="shopping-bag-rollover-scroll-down">
                    <div className="navigation-arrow-down"></div>
                </div>
                <div className="shopping-bag-rollover-summary">
                    <dl className="clearfix">
                        <dt>Order value</dt>
                        <dd>$14.99</dd>
                        <dt>Standard shipping</dt>
                        <dd>
                            $7.99</dd>
                    </dl>
                    <dl className="shopping-bag-rollover-order-total">
                        <dt>Total:</dt>
                        <dd>$22.98</dd>
                    </dl>
                    <a href="/en_ca/checkout" className="button button-big">
                        CHECKOUT
                    </a>
                    <a href="/en_ca/cart" className="button button-big button-secondary">
                        Shopping bag
                    </a>
                </div>				
            </div>
	    </div>
    )
};

export default MiniCart;