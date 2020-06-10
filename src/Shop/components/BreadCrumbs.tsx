import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import '../styles/breadcrumbs.css';

interface BreadCrumbsProps {
    firstItem: String;
    secondItem?: String;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = (props): JSX.Element => {
    const { firstItem, secondItem } = props;

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{ firstItem }</Breadcrumb.Item>
            { 
                secondItem && 
                <Breadcrumb.Item active>{ secondItem }</Breadcrumb.Item>
            }
        </Breadcrumb>
    );
};

export default BreadCrumbs;