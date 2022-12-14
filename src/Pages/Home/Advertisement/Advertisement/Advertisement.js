import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisementItem from './AdvertisementItem';

const Advertisement = () => {
  const url = `https://preloved-things-server.vercel.app/products?isAdvertised=yes`;

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(url, {
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
      });
      const data = await res.json();
      return data;
    },
  });
  console.log("from Advertisement", products)
  return (
    <div className='mb-12'>
      {products.length && <>
        <h1 className="text-center font-bold text-4xl">
          Advertisement Product
        </h1>
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            products.map((product) => <AdvertisementItem product={product} key={product._id}></AdvertisementItem>)
          }
        </div>
      </>}
    </div>
  );
};

export default Advertisement;