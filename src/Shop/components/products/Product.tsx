import React from 'react';
import { ProductNode } from '../../graphql';

interface ProductProp {
    product: ProductNode
}

const Product: React.FC<ProductProp> = (props): JSX.Element => {
    const { product } = props;
    // console.log(props.product);

    return (
        <article 
            id="product-14073510" 
            data-auto-id="productTile" 
            className="_2qG85dG"
        >
            <a className="_3TqU78D" 
                href="#label" 
                aria-label={`${product.node.name}, Price: ${product.node.price}`}
            >
                <div className="ERlP6Bx">
                    <img alt={product.node.name} 
                        className="_2r9Zh0W" 
                        data-auto-id="productTileImage" 
                        sizes="(min-width: 768px) 317px, 238px" 
                        src={`http://localhost:8000${product.node.image}`}
                    />
                </div>
                <div data-auto-id="productTileDescription" className="_3WEsAhb">
                    <div className="_3J74XsK">
                        <div>
                            <p>{product.node.name}</p>
                        </div>
                    </div>
                </div>
                <div className="_3uttjfs">
                    {
                        product.node.old_price > 0 &&(
                        <>
                            <p className="_1ldzWic">
                                <span className="Dy5fJQR" 
                                    data-auto-id="productTilePrice"
                                >
                                    £{product.node.old_price}
                                </span>
                            </p>
                            <p className="_1ldzWid">
                                <span className="Dy5fJQJ" 
                                    data-auto-id="productTilePrice"
                                >
                                    £{product.node.price}
                                </span>
                            </p>
                        </>
                        )
                    }
                    {
                        product.node.old_price === 0 && 
                        <p className="_1ldzWib">
                            <span className="Dy5fJQR" 
                                data-auto-id="productTilePrice"
                            >
                                £{product.node.price}
                            </span>
                        </p>
                    }
                </div>
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