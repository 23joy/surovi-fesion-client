import { AddModalShoes } from '@/Components/AddModalShoes';
import { getShoesProduct } from '@/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShoesProductPage = async () => {
    const shoesProduct = await getShoesProduct();
    console.log(shoesProduct)
    return (
        <div className='container mx-auto p-10 space-y-5'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl text-[#26382B]'>ALL Shoes Product</h2>
                <AddModalShoes></AddModalShoes>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5'>
                {
                    shoesProduct.map(shoes => <Card key={shoes._id} className='w-full min-w-0 p-4 sm:p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300'>
                        <div>
                            <Image
                                src={shoes.image}
                                alt={shoes.image}
                                width={400}
                                height={400}
                                className='object-contain h-[250px] rounded-2xl w-full'
                            ></Image>
                        </div>
                        <div>
                            <h2>{shoes.name}</h2>
                            <p>Price: ${shoes.price}</p>
                            <p>{shoes.description}</p>
                        </div>
                        <div className='flex gap-4'>
                            <Link href={`/products/shoes/${shoes._id}`}>
                            <Button className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}> Buy Now</Button>
                            </Link>
                            <Link href={`/products/shoes/${shoes._id}`}>
                            <Button className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}> Details</Button>
                            </Link>
                        </div>

                    </Card>)
                }
            </div>
        </div>
    );
};

export default ShoesProductPage;