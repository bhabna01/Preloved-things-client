import React from 'react';

const ProductCards = ({ category }) => {
    const { product_name, img, location, resale_price, orginal_price, years_of_use, seller_name, date } = category
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-5">
            <figure><img src={img} style={{ height: '200px' }} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <h2 className="">Location:{location}</h2>
                <h2 className="">Resale_Prize:{resale_price}</h2>
                <h2 className="">Original_Prize:{orginal_price}</h2>
                <h2 className="">Years of use:{years_of_use}</h2>
                <h2 className="">Seller name:{seller_name}</h2>
                <h2 className="">Date:{date}</h2>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;