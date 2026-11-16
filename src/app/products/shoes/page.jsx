import { AddModalShoes } from '@/Components/AddModalShoes';
import ShoesProduct from '@/Components/ShoesProduct';

import React, { Suspense } from 'react';

const ShoesProductPage = async () => {

    return (
        <div className='container mx-auto p-10 space-y-5'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl text-[#26382B]'>ALL Shoes Product</h2>
                <AddModalShoes></AddModalShoes>
            </div>
            <div className='flex justify-between items-center'>
                <Suspense fallback={<p>Loading shoes.....</p>}>
                    <ShoesProduct></ShoesProduct>
                </Suspense>
            </div>
        </div>
    );
};

export default ShoesProductPage;