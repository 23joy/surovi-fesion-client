
import { AAddmodalDress } from '@/Components/AddmodalDress';
import DressProduct from '@/Components/DressProduct';

import React, { Suspense } from 'react';

const dressPage = () => {
   
    return (
        <div className='container mx-auto p-10'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl text-[#26382B]'>All Drss category</h2>
                <AAddmodalDress></AAddmodalDress>
               
            </div>
            <div className='flex justify-between items-center'>
                <Suspense fallback={<p>Loading dress.....</p>}>
                    <DressProduct></DressProduct>
                </Suspense>
            </div>
        </div>
    );
};

export default dressPage;