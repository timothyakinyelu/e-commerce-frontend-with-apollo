import React from 'react';
import Gallery from '../components/Gallery';
import '../styles/main.css';
import ProductList from '../components/products/ProductList';

const Main: React.FC = (): JSX.Element => {
    return (
        <>
            <main>
                <Gallery />
                <ProductList />
            </main>
        </>
    )
}

export default Main;