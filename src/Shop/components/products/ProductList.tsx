import React, { Fragment, useEffect } from 'react';
import Product from './Product';
import { GET_PRODUCTS, GET_VIEWED_PRODUCTS } from '../../graphql/queries/products';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { ProductNode } from '../../graphql';

import '../../styles/product.css';
import { Button } from 'react-bootstrap';

const ProductList: React.FC = (): JSX.Element => {
    const { 
        data, 
        loading, 
        error,
        fetchMore
    } = useQuery(
        GET_PRODUCTS
    );

    const { 
        data: views,
    } = useQuery(
        GET_VIEWED_PRODUCTS
    );

    const client = useApolloClient();


    const productList = () => {
        if(!data.products) return;
        if(data.products) {
            return data.products.edges.map((product: ProductNode) => (
                <Product key={product.node.id} product={product}/>
            ));
        }
    }

    useEffect(() => {
        if(!localStorage.getItem('cursor')) return;
        console.log(views.viewed);
        fetchMore({
            variables: {
                after: localStorage.getItem('cursor')
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if(!fetchMoreResult) return prev;
                return {
                    ...fetchMoreResult,
                    products: {
                        ...fetchMoreResult.products,
                        edges: [
                            ...fetchMoreResult.products.edges
                        ]
                    }
                }
            }
        })
    }, [])

    if (loading) return <p>...Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;


    return (
        <Fragment>
            <h3>Product List</h3>
            <div className="_3-pwX1m">
                <div className="_2MoInDZ">
                    <div className="_3pQmLlY">
                        <section>
                            { productList() }
                            {
                                data.products && data.products.pageInfo.hasNextPage && (
                                    <Button onClick={() =>{
                                        client.writeData({ data: { viewed: views.viewed + data.products.pageInfo.count } });
                                        localStorage.setItem('cursor', data.products.pageInfo.endCursor)
                                        fetchMore({
                                            variables: {
                                                after: data.products.pageInfo.endCursor
                                            },
                                            updateQuery: (prev, { fetchMoreResult }) => {
                                                if(!fetchMoreResult) return prev;
                                                // console.log(fetchMoreResult);
                                                return {
                                                    ...fetchMoreResult,
                                                    products: {
                                                        ...fetchMoreResult.products,
                                                        edges: [
                                                            ...prev.products.edges,
                                                            ...fetchMoreResult.products.edges
                                                        ]
                                                    }
                                                }
                                            },
                                        })
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