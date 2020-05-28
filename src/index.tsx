import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { resolvers, typeDefs } from './Shop/graphql/resolvers/resolvers';
// import { persistCache } from 'apollo-cache-persist';
// import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';

const cache = new InMemoryCache({
    dataIdFromObject: object => {
        switch(object.__typename) {
            case 'Category': return `Category:${object.id}`;
            case 'Product': return `Product:${object.id}`;
            default: return defaultDataIdFromObject(object);
        }
    }
});
const link = new HttpLink({
    uri: 'http://localhost:8000/graphql'
});

// persistCache({
//     cache,
//     storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
// });

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link,
    typeDefs,
    resolvers,
});

cache.writeData({
    data: {
        wishListItems: localStorage.getItem('wishListItems') === '' ? [] : [localStorage.getItem('wishListItems')]
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
