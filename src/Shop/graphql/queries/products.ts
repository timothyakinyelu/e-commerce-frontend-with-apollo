import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    query GetProducts($after: String) {
        products(after: $after) {
            pageInfo {
                hasNextPage
                endCursor
                count
                total
            }
            edges {
                node {
                    id
                    brand_id
                    name
                    price
                    old_price
                    image
                }
            }
        }
    }
`;

export const GET_VIEWED_PRODUCTS = gql`
    query GetViewedProducts {
        viewed @client
    }
`;