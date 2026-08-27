import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
                <h2 className='text-5xl font-bold'>Give your child a <span className='text-primary'>bright future</span></h2>
                <p className='text-2xl'>Buy every toy up to 15% disount</p>
                <button className='btn btn-primary btn-outline'>Explore Products</button>
            </div>
            <div>
                <Image alt='Hero banner' width={500} height={400} src={'/assets/hero.png'}></Image>
            </div>
        </div>
    );
};

export default Banner;