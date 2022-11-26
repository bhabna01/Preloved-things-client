import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CategoryCard from './CategoryCard';
import { useQuery } from '@tanstack/react-query';
const Categories = () => {
    const { data: categoriesName = [], refetch, isLoading } = useQuery({
        queryKey: ['categoriesName'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryName');
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="">
            <h1 className="text-center font-bold text-4xl">Featured Categories</h1>
            <div className='grid mt-12 mb-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    categoriesName.map(card => <CategoryCard
                        key={card._id}
                        card={card}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;
//
//
