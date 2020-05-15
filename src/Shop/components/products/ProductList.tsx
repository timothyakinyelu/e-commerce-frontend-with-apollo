import React from 'react';
import Product from './Product';
import { GET_PRODUCTS } from '../../graphql/queries/products';
import { useQuery } from '@apollo/react-hooks';
import { ProductInfo } from '../../graphql';

import '../../styles/product.css';

const ProductList: React.FC = (): JSX.Element => {
    const { 
        data, 
        loading, 
        error
    } = useQuery(GET_PRODUCTS);

    if (loading) return <p>...Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const productList = () => {
        if(data.products === undefined) return;
        if(data.products) {
            return data.products.data.map((product: ProductInfo) => (
                <Product key={product.id} product={product}/>
            ))
        }
    }

    return (
        <>
            <h3>Product List</h3>
            <div className="_3-pwX1m">
                <div className="_2MoInDZ">
                    <div className="_3pQmLlY">
                        <section>
                            { productList() }
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;