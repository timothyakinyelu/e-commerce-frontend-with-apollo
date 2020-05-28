import gql from 'graphql-tag';
import { PRODUCT_DETAILS } from './fragment';

export const GET_CATEGORIES = gql`
    query GetCategories {
        parents(where: { column: PARENT, operator: IS_NULL }) {
            id
            parent_id
            name
            children {
                id
                parent_id
                name
            }
            products {
                edges {
                    node {
                        id
                        brand_id
                        name
                        brand {
                            id
                            name
                        }
                    }
                }
            }
        }
    }
`;

export const GET_CATEGORY_PRODUCTS = gql`
    query GetProductsByCategory($catID: ID!, $after: String) {
        category(id: $catID) {
            name
            parent_id
            products(after: $after) {
                pageInfo {
                    hasNextPage
                    endCursor
                    count
                    total
                }
                edges {
                    node {
                        ...productDetail
                    }
                }
            }
        }
    }
    ${PRODUCT_DETAILS}
`;