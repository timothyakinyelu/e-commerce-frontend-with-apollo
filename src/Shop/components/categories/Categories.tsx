import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_CATEGORIES } from '../../graphql/queries/categories';
import { Category } from '../../graphql';

import imgHold from '../../../images/holdingImg.jpg';
import '../../styles/category.css';
import { Link } from 'react-router-dom';

const Categories: React.FC = (): JSX.Element => {
    const {
        data,
        loading,
        error
    } = useQuery(GET_ALL_CATEGORIES);
    
    if (loading) return <p>...Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const categoryList = () => {
        if(data.categories === undefined) return;

        if(data.categories) {
            return data.categories.map((category: Category) => (
                <div key={category.id} className="card">
                    {/* when you see this in the morning add endcursor to route like a query */}
                    <Link to={`/shop/cat/${category.name}/${category.id}`}>
                        <div className="card-body">
                            <figure>
                                <img src={imgHold} alt="" />
                            </figure>
                        </div>
                    </Link>
                    <div className="card-footer">
                        <h4>{ category.name }</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            ))
        }
    }

    return (
        <Fragment>
            <section className="main-section container-fluid">
                <div className="section-caption">
                    <h3>Browse our Catalog</h3>
                </div>
                <div className="row">
                    { categoryList() }
                </div>
            </section>
        </Fragment>
    )
}

export default Categories;