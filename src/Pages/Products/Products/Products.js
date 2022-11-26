import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCards from '../ProductCards/ProductCards';

const Products = () => {
    const products = useLoaderData();
    const [selected, setSelected] = useState(null);
    const { product_id, product_name } = products[0];

    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-5 font-bold text-xl'>Featured Products</h1>



            <div className='course-container mt-5 '>


                {

                    products.map(category => <ProductCards
                        category={category}
                        key={category.product_id}
                        setSelected={setSelected}
                    >

                    </ProductCards>)
                }


            </div>
            {
                selected &&
                <BookingModal selected={selected} setSelected={setSelected}></BookingModal>
            }

        </div>
    );
};

export default Products;