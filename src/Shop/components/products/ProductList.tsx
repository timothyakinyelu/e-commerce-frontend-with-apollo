import React, { Fragment } from 'react';
import Product from './Product';
import { ProductNode, ProductEdges } from '../../graphql';

import '../../styles/product.css';
import { Button } from 'react-bootstrap';

interface ProductListProps {
    products: ProductEdges;
    loadMore: () => void
}

const ProductList: React.FC<ProductListProps> = (props): JSX.Element => {
    const { products, loadMore } = props;

    const productList = () => {
        if(!products) return;
        if(products) {
            return products.edges.map((product: ProductNode) => (
                <Product key={product.node.id} product={product}/>
            ));
        }
    }

    return (
        <Fragment>
            <h3>Product List</h3>
            <div className="_3-pwX1m">
                <div className="_2MoInDZ">
                    <div className="_3pQmLlY">
                        <section>
                            { productList() }
                            {
                                products && products.pageInfo.hasNextPage && (
                                    <Button onClick={() => {
                                        loadMore()
                                    } 
                                    }>Load More</Button>
                                )
                            }
                        </section>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductList;