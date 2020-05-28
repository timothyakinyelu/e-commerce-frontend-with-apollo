import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_WISH_ITEMS } from '../../graphql/queries/products';

const WishList: React.FC = ():JSX.Element => {

    const { data, loading, error } = useQuery(
        GET_WISH_ITEMS
    );

    if (loading) return <p>...loading</p>;
    if (error) return <p>ERROR: {error.message}</p>;

    return (
        <Fragment>
        <h2>My Wish List</h2>
        {!data || (!!data && data.wishListItems.length) === 0 ? (
            <p data-testid="empty-message">No items in your cart</p>
        ) : (
            <Fragment>
            {!!data && data.wishListItems.map((productId: any) => (
                <div key={productId}>{productId}</div>
            ))}
            </Fragment>
        )}
        </Fragment>
    );
}

export default WishList;