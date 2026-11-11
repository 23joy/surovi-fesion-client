import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MakupDetails = ({ makupDetails }) => {
    const makup = makupDetails;
    console.log(makupDetails)
    return (
        <div className='container mx-auto'>
            <div>

            </div>
            <Card className="bg-[#FFF5E4] m-10 rounded-xl  flex justify-between items-center gap-3 sm:flex-row md:flex-row ">
                <div className='w-full'>
                    <Image
                        src={makup.image}
                        alt={makup.image}
                        height={300}
                        width={300}
                        className='object-contain w-full h-[400px]'
                    ></Image>
                </div>
                <div className='flex flex-col px-10 space-y-3'>
                    <h2 className='text-xl font-bold'>Product Name: <span>{makup.name}</span></h2>
                    <p className='font-bold'>Price: <span>{makup.price}</span></p>

                    <Link href={`/products/makup/${makup._id}`}>
                        <Button className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>Details</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default MakupDetails;