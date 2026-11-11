import MakupDetails from '@/Components/MakupDetails';
import { makupDetails } from '@/lib/data';
import React from 'react';

const MakupDetailsPage =async ({params}) => {
    const{MakupId}=await params;
    const makupDetail=await makupDetails(MakupId)
    console.log(makupDetail)
    return (
        <div>
            <h2>MakupDetails Page</h2>
            <MakupDetails makupDetails={makupDetail}></MakupDetails>
        </div>
    );
};

export default MakupDetailsPage;