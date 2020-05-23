import React, { Fragment } from 'react';
import Gallery from '../components/Gallery';
import '../styles/main.css';
import Categories from '../components/categories/Categories';

const Main: React.FC = (): JSX.Element => {
    return (
        <Fragment>
            <Gallery />
            <Categories />
        </Fragment>
    );
}

export default Main;