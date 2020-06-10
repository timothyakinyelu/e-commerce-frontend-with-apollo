import React, { Fragment } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { useParams } from 'react-router-dom';

const ProductInfo: React.FC = (): JSX.Element => {
    const { catName, productName} = useParams();
    
    return (
        <Fragment>
            <BreadCrumbs firstItem={catName} secondItem={productName} />
            <h3>Information</h3>
        </Fragment>
    );
}

export default ProductInfo;