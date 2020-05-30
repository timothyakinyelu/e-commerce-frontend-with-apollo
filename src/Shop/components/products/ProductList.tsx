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
            <section className="_3-pwX1m">
                <div className="_2MoInDZ">
                    <div className="_3pQmLlY">
                        <div className="section-head">
                            <h3>Product List</h3>
                        </div>
                        <div className="products-center">
                            { productList() }
                            {
                                products && products.pageInfo.hasNextPage && (
                                    <Button 
                                        className="loadmore" 
                                        onClick={() => loadMore() }
                                    >
                                        Load More
                                    </Button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default ProductList;