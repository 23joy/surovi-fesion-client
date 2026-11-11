import ShoesDetails from '@/Components/ShoesDetails';
import { shoesDetails } from '@/lib/data';
import React from 'react';

const ShoesDetailsPage = async({params}) => {
    const{ShoesId}=await params;
    const shoes=await shoesDetails(ShoesId)
    console.log(shoes)
    return (
        <div>
            <div>

            </div>
            <div>
                <ShoesDetails shoes={shoes}></ShoesDetails>
            </div>
        </div>
    );
};

export default ShoesDetailsPage;