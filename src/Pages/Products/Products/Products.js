import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCards from '../ProductCards/ProductCards';

const Products = () => {
    const products = useLoaderData();

    const { product_id, product_name } = products[0];

    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-5 font-bold text-xl'>Featured Products</h1>

            <h1>{products.length}</h1>

            <div className='course-container mt-5 '>


                {

                    products.map(category => <ProductCards
                        category={category}
                        key={category.product_id}

                    >

                    </ProductCards>)
                }


            </div>


        </div>
    );
};

export default Products;