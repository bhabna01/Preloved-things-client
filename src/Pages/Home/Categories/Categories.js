import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
    return (
        <div>
            <h4 className='text-center font-bold text-4xl mb-12'>Featured Products</h4>

            <div className='flex justify-between '>
                {
                    categories.map(category => <div className="card w-96 bg-primary text-primary-content mb-12" key={category.category_id}>
                        <div className="card-body text-center">
                            <Link to={`/category/${category.category_id}`}>{category.category_name}</Link>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Categories;
//
//
