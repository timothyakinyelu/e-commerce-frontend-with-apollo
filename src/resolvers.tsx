import gql from 'graphql-tag';
import { ApolloCache } from 'apollo-cache';
import { Resolvers } from 'apollo-client';
import { ProductNode } from './Shop/graphql';
import { GET_VIEWED_PRODUCTS } from './Shop/graphql/queries/products';

export const typeDefs = gql`

    extend type Query {
        viewed: Int!
    }

    extend type Product {
        isViewed: Boolean!
    }
`;

type ResolverFn = (
    parent: any, 
    args: any, 
    { cache } : { cache: ApolloCache<any> }
) => any;
  
interface ResolverMap {
    [field: string]: ResolverFn;
}
  
interface AppResolvers extends Resolvers {
    // We will update this with our app's resolvers later
    Product: ResolverMap;
}
  
export const resolvers: AppResolvers = {
    Product: {
        isViewed: (product: ProductNode, _, { cache }): boolean => {
            const queryResult = cache.readQuery<any>({ 
            query: GET_VIEWED_PRODUCTS 
            });
            if (queryResult) {
            return queryResult.viewed.includes(product.node.id)
            } 
            return false;
        }
    },
};