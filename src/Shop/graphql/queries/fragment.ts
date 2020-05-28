import gql from 'graphql-tag';

export const PRODUCT_DETAILS = gql`
    fragment productDetail on Product {
        id
        inWishList @client
        brand_id
        name
        price
        old_price
        image
        full_description
        sku
        gtin
        slug
        short_description
        color
        discount
        featured
        status
        stock
        images
        brand {
            id
            name
        }
    }
`;