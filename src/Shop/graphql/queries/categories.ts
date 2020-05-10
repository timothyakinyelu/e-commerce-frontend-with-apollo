import gql from 'graphql-tag';

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
        }
    }
`;