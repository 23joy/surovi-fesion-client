import DressDetails from '@/Components/DressDetails';
import { dressDetails } from '@/lib/data';
import React from 'react';

const DressDetailsPage = async({params}) => {
    const {DressId}=await params;
    const productDetails=await dressDetails(DressId)
    console.log(productDetails)
    return (
        <div>
            <h2>DressDetailsPage</h2>
            <div>
                <DressDetails productDetails={productDetails}></DressDetails>
            </div>
        </div>
    );
};

export default DressDetailsPage;