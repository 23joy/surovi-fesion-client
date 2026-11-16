import { DeleteShoes } from '@/Components/DeleteShoes';
import EditShoesModal from '@/Components/EditShoesModal';
import ShoesDetails from '@/Components/ShoesDetails';
import { shoesDetails } from '@/lib/data';
import React, { Suspense } from 'react';
export const instant = false;

const ShoesDetailsPage = async({params}) => {
    const{ShoesId}=await params;
    const shoes=await shoesDetails(ShoesId)
    console.log(shoes)
    return (
        <div className='container mx-auto p-10'>
            <div className='flex justify-between items-center '>
                <h2>All Shoes Product</h2>
                <div>
                    <EditShoesModal shoes={shoes}></EditShoesModal>
                    <DeleteShoes shoes={shoes}></DeleteShoes>
                </div>

            </div>
            <div>
                <Suspense fallback={<p>loading.......</p>}>
                    <ShoesDetails shoes={shoes}></ShoesDetails>
                </Suspense>
            </div>
        </div>
    );
};

export default ShoesDetailsPage;