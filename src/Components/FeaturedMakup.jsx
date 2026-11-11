import { getMakupProduct } from '@/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedMakup = async () => {
    const makupproduct = await getMakupProduct();
    const makups = makupproduct.slice(0, 4)
    return (
        <div className='p-10 container mx-auto space-y-4 '>
            <div className='text-center container max-auto'>
                <h2 className='font-bold text-2xl text-[#26382B]'>Walk with Confidence</h2>
                <p  className='text-[#60483B]'>Discover the perfect blend of comfort, quality, and style. Explore our exclusive collection of shoes designed to keep you confident and stylish on every step.</p>
            </div>
            <div className='flex justify-end'>
                <Button className={'bg-none bg-transparent text-[#26382B] border border-gray-300 rounded-xl'}>
                    <Link href={'/products/makup'}>See All </Link>
                    <FaArrowRight />
                </Button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    makups.map(makup => <Card key={makup._id}
                        className='space-y-3'
                    >
                        <div>
                            <Image
                                src={makup.image}
                                alt={makup.image}
                                height={300}
                                width={300}
                                className='object-contain w-full h-[240px]'
                            ></Image>
                        </div>
                        <div className='flex flex-col px-10'>
                            <h2 className='text-xl font-bold'>Product Name:<span>{makup.name}</span></h2>
                            <p className='font-bold'>Price<span>{makup.price}</span></p>
                        </div>
                        <div className='px-10 '>
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

export default FeaturedMakup;