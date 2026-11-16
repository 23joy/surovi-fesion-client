import { AddModalMakup } from '@/Components/AddModalMakup';
import MakupProduct from '@/Components/MakupProduct';

import React, { Suspense } from 'react';

const makupPage =async () => {
    
    return (
        <div className='container mx-auto p-10 space-y-4'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl text-[#26382B]'>All Makup Products</h2>
                <AddModalMakup></AddModalMakup>
            </div>
           <div className='flex justify-between items-center'>
             <Suspense fallback={<p>Loading makup.....</p>}>
                <MakupProduct></MakupProduct>
            </Suspense>
           </div>
        </div>
    );
};

export default makupPage;