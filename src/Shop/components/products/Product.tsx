import React from 'react';
import { ProductInfo } from '../../graphql';

interface ProductProp {
    product: ProductInfo
}

const Product: React.FC<ProductProp> = (props): JSX.Element => {
    const { product } = props;
    // console.log(props.product);

    return (
        <article 
            id="product-14073510" 
            data-auto-id="productTile" 
            className="_2qG85dG">
                <a className="_3TqU78D" 
                    href="" 
                    aria-label={`${product.name}, Price: ${product.price}`}
                >
                    <div className="ERlP6Bx">
                        <img alt={product.name} 
                            className="_2r9Zh0W" 
                            data-auto-id="productTileImage" 
                            sizes="(min-width: 768px) 317px, 238px" 
                            src={`http://localhost:8000${product.image}`}
                        />
                    </div>
                    <div data-auto-id="productTileDescription" className="_3WEsAhb">
                        <div className="_3J74XsK">
                            <div>
                                <p>{product.name}</p>
                            </div>
                        </div>
                    </div>
                    <p className="_1ldzWib">
                        <span className="Dy5fJQR" 
                            data-auto-id="productTilePrice"
                        >
                            £{product.price}
                        </span>
                    </p>
                </a>
                <button type="button" 
                    data-auto-id="saveForLater" 
                    data-auto-state="inactive" 
                    className="_2HTnAzH" 
                    aria-label="Save for later" aria-pressed="false"
                >
                    <span className="_30BqGyh mdi mdi-heart-outline"></span>
                </button>
            </article>
    );
}

export default Product;