import React from 'react';

const AdvertisementItem = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={product.img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.product_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{product.resale_price} TK</p>
        <div className="card-actions justify-end">
          <div className="badge bg-neutral text-white badge-outline">{product.condition} Condition</div>
          <div className="badge badge-outline">{product.category_name}</div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementItem;