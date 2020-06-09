import gql from 'graphql-tag';
import { PRODUCT_DETAILS } from './fragment';

// fetch parent categories to display in navbar
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

// fetch sub categories with a featured value of true
export const GET_ALL_CATEGORIES = gql`
    query GetAllCategories {
        categories(where: { column: FEATURED, value: TRUE }) {
            # data {
               id
               name
            # }
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