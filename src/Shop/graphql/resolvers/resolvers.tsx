import gql from 'graphql-tag';
import { ApolloCache } from 'apollo-cache';
import { Resolvers } from 'apollo-client';
import { ProductInfo } from '..';
import { GET_WISH_ITEMS } from '../queries/products';

export const typeDefs = gql`

    extend type Query {
        wishListItems: [ID!]!
    }

    extend type Product {
        inWishList: Boolean!
    }

    extend type mutation {
        addOrRemoveFromWishList(id: ID!): [ID!]!
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
    Mutation: ResolverMap;
}
  
export const resolvers: AppResolvers = {
    Product: {
        inWishList: (product: ProductInfo, _, { cache }): boolean => {
          const queryResult = cache.readQuery<any>({ 
            query: GET_WISH_ITEMS
          });
          if (queryResult) {
            return queryResult.wishListItems.includes(product.id)
          } 
          return false;
        }
    },
    Mutation: {
        addOrRemoveFromWishList: (_, { id }: {id: string}, { cache }): string[] => {
            const queryResult = cache.readQuery<any>({
                query: GET_WISH_ITEMS
            });
            if(queryResult) {
                const { wishListItems } = queryResult;
                const data = {
                    wishListItems: wishListItems.includes(id) 
                    ? wishListItems.filter((i: any) => i !== id)
                    : [...wishListItems, id],
                };
                cache.writeQuery({query: GET_WISH_ITEMS, data});
                localStorage.setItem('wishListItems', data.wishListItems);
                return data.wishListItems;
            }
            localStorage.removeItem('wishListItems');
            return [];
            
        }
    }
};