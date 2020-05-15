import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    query GetProducts {
        products {
            paginatorInfo {
                count
                hasMorePages
            }
            data {
                id
                brand_id
                name
                price
                image
            }
        }
    }
`;