import React from 'react';
import { ProductNode } from '../../graphql';
import { useMutation } from '@apollo/react-hooks';
import { TOGGLE_CART } from '../../graphql/queries/products';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

interface ProductProp {
    product: ProductNode
}

const Product: React.FC<ProductProp> = (props): JSX.Element => {
    const { product } = props;
    const { catName, catID} = useParams();
    
    const [mutate, {error}] = useMutation(
        TOGGLE_CART, {
            variables: { productId: product.node.id}, 
        }
    )

    if (error) return <p>Unable to add wishlist!</p>;

    // Function to toggle the wishlist content
    const addFavourite = () => {
        mutate();

        const item = document.getElementById(`data${product.node.id}`) as HTMLElement;

        if(item) {
            item.classList.toggle('isWished');
        }
    }

    return (
        <article className="product">
            <div className="img-container">
                <Link to={`/shop/cat/${catName}/${catID}/${product.node.name}/${product.node.id}`} className="product-link">
                    <img className="product-img" 
                        src={`http://localhost:8000${product.node.image}`} 
                        alt={product.node.name}
                    />
                </Link>
                <Button type="button" 
                    id={`data${product.node.id}`}
                    data-auto-id="saveForLater" 
                    data-auto-state="inactive" 
                    className="_2HTnAzH" 
                    aria-label="Save for later" aria-pressed="false"
                    bsPrefix="wish"
                >
                    <span className="_30BqGyh mdi mdi-heart-outline" onClick={() => addFavourite()}></span>
                </Button>
            </div>
            <div data-auto-id="productTileDescription" className="_3WEsAhb">
                <h6 className="_3J74XsK">
                    {/* <div> */}
                        {product.node.name}
                    {/* </div> */}
                </h6>
                <h6 className="_3uttjfs">
                    {
                        product.node.old_price > 0 &&(
                        <>
                            {/* <p className="_1ldzWic"> */}
                                <span className="Dy5fJQS" 
                                    data-auto-id="productTilePrice"
                                >
                                    ₦{product.node.old_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                </span>
                            {/* </p> */}
                            {/* <p className="_1ldzWid"> */}
                                <span className="Dy5fJQJ" 
                                    data-auto-id="productTilePrice"
                                >
                                    ₦{product.node.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                </span>
                            {/* </p> */}
                        </>
                        )
                    }
                    {
                        product.node.old_price === 0 && 
                        // <p className="_1ldzWib">
                            <span className="Dy5fJQR" 
                                data-auto-id="productTilePrice"
                            >
                                ₦{product.node.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                            </span>
                        // </p>
                    }
                </h6>
            </div>
        </article>
    );
}

export default Product;