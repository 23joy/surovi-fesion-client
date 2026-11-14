import { AddModalMakup } from '@/Components/AddModalMakup';
import { getMakupProduct } from '@/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const makupPage =async () => {
    const makupProduct =await getMakupProduct()
    console.log(makupProduct)
    return (
        <div className='container mx-auto p-10 space-y-4'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl text-[#26382B]'>All Makup Products</h2>
                <AddModalMakup></AddModalMakup>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center'>
                {
                    makupProduct.map(makup=> <Card key={makup._id}
                        className='space-y-3 '
                    >
                        <div>
                            <Image
                            src={makup.image}
                            alt={makup.image}
                            height={300}
                            width={300}
                            className='h-[240px] w-full object-contain'
                            >
                            </Image>
                        </div>
                        <div className='flex flex-col px-10'>
                            <h2 className='text-xl font-bold'>Product Name:<span>{makup.name}</span></h2>
                            <p className='font-bold'>Price:<span className=''>{makup.price}</span></p>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <Link href={`/products/makup/${makup._id}`}>
                            <Button className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>Buy Now</Button>
                            </Link>
                            <Link href={`/products/makup/${makup._id}`}>
                            <Button className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>Details</Button>
                            </Link>
                        </div>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default makupPage;