import React from 'react';
import BannerItems from './BannerItems';
import img1 from '../../../assests/banner/img1.png'
import img2 from '../../../assests/banner/img2.png'
import img3 from '../../../assests/banner/img3.png'
import img4 from '../../../assests/banner/img4.png'
const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },

    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    },


]

const Banner = () => {
    return (
        <div className="carousel w-full mb-12 ">
            {
                bannerData.map(slide => <BannerItems image={img1}
                    key={slide.id}
                    slide={slide}

                ></BannerItems>)
            }


        </div>
    );
};

export default Banner;