import { DeleteDress } from '@/Components/DeleteDress';
import DressDetails from '@/Components/DressDetails';
import EditDressModal from '@/Components/EditDressModal';
import { dressDetails } from '@/lib/data';
import React from 'react';

const DressDetailsPage = async({params}) => {
    const {DressId}=await params;
    const productDetails=await dressDetails(DressId)
    console.log(productDetails)
    return (
        <div className='container mx-auto p-10'>
            <div className='flex justify-between items-center '>
                <h2 className='font-bold text-2xl'>DressDetailsPage</h2>
                <div>
                    <EditDressModal productDetails={productDetails}></EditDressModal>
                    <DeleteDress productDetails={productDetails}></DeleteDress>
                </div>
            </div>
            <div>
                <DressDetails productDetails={productDetails}></DressDetails>
            </div>
        </div>
    );
};

export default DressDetailsPage;