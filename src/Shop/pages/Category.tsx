import React, { Fragment, useEffect, useCallback, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_CATEGORY_PRODUCTS } from '../graphql/queries/categories';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import BreadCrumbs from '../components/BreadCrumbs';

const Category: React.FC = (): JSX.Element => {
    const { catID, catName } = useParams();
    const history = useHistory();
    const [clicked, setClicked] = useState(false);
    const [_isMounted, setIsMounted] = useState(true);

    function useUrlQuery(): any {
        return new URLSearchParams(useLocation().search);
    }
    const query = useUrlQuery();
    const cursor = query.get('after');

    const [getCategoryProducts, { data, loading, error, fetchMore }] = useLazyQuery(
        GET_CATEGORY_PRODUCTS, {
            variables: {
                catID
            }
        }
    )

    useEffect(() => {
        if(_isMounted) {
            getCategoryProducts()
        }

        return () => {
            setIsMounted(false);
        }
    }, [_isMounted, getCategoryProducts])

    const onRefresh = useCallback(() => {
        fetchMore({
            variables: {
                after: cursor
            },
            updateQuery: (prev: any, { fetchMoreResult}) => {
                // const prevEdges = prev.category.products.edges;
                const newEdges = fetchMoreResult.category.products.edges;
                const pageInfo = fetchMoreResult.category.products.pageInfo;

                return newEdges.length ? {
                    ...fetchMoreResult,
                    category: {
                        ...fetchMoreResult.category,
                        products: {
                            ...fetchMoreResult.category.products,
                            edges: [
                                // ...prevEdges, 
                                ...newEdges
                            ],
                            pageInfo
                        }
                    }
                } : prev
            }
        });
    },[fetchMore, cursor]);

    const loadMore = () => {
        let cursor = data.category.products.pageInfo.endCursor;
        let count = data.category.products.pageInfo.count;

        console.log(count++)

        fetchMore({
            variables: {
                after: cursor
            },
            updateQuery: (prev: any, { fetchMoreResult}) => {
                const prevEdges = prev.category.products.edges;
                const newEdges = fetchMoreResult.category.products.edges;
                const pageInfo = fetchMoreResult.category.products.pageInfo;

                return newEdges.length ? {
                    ...fetchMoreResult,
                    category: {
                        ...fetchMoreResult.category,
                        products: {
                            ...fetchMoreResult.category.products,
                            edges: [
                                ...prevEdges, 
                                ...newEdges
                            ],
                            pageInfo
                        }
                    }
                } : prev
            }
        })
        history.push(
            '/shop/cat/' + catName + '/' + catID + '?after=' + cursor
        );
        setClicked(true);
    }

    useEffect(() => {
        const ac = new AbortController();

        if(cursor === undefined || clicked === true) return;
        if(data) {
            onRefresh();
        }
        
        return function cleanup(): void {
            ac.abort();
        }
    }, [data, cursor, clicked, onRefresh]);

    if (loading) return <p>...Loading</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

    
    return (
        <Fragment>
            <BreadCrumbs firstItem={catName} />
            <ProductList products={data.category.products} loadMore={() => loadMore()} />
        </Fragment>
    )
}

export default Category;