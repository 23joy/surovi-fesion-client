import { DeleteMakup } from '@/Components/DeleteMakup';
import EditMakupModal from '@/Components/EditMakupModal';
import MakupDetails from '@/Components/MakupDetails';
import { makupDetails } from '@/lib/data';
import React from 'react';

const MakupDetailsPage =async ({params}) => {
    const{MakupId}=await params;
    const makupDetail=await makupDetails(MakupId)
    console.log(makupDetail)
    return (
        <div className='container mx-auto p-10'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl '>MakupDetails Page</h2>
               <div className='flex gap-3'>
                 <EditMakupModal makupDetail={makupDetail}></EditMakupModal>
                 <DeleteMakup makupDetail={makupDetail}></DeleteMakup>
               </div>
            </div>
            <div>
                <MakupDetails makupDetails={makupDetail}></MakupDetails>
            </div>
        </div>
    );
};

export default MakupDetailsPage;