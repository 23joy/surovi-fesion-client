import { getShoesProduct } from '@/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedShoes = async () => {
    const featuredShoes = await getShoesProduct()
    const Shoes = featuredShoes.slice(0, 4)
    return (
        <div className='p-10 container mx-auto space-y-4'>
            <div className='text-center container max-auto'>
                <h2 className='font-bold text-2xl text-[#26382B]'>Women's Shoes Collection</h2>
                <p className='text-[#60483B]'>Explore stylish sneakers, elegant heels, comfortable flats, and trendy sandals for every occasion.</p>
            </div>
            <div className='flex justify-end'>
                <Button className={'bg-none bg-transparent text-[#26382B] border border-gray-300 rounded-xl'}>
                    <Link href={'/products/shoes'}>See All </Link>
                    <FaArrowRight />
                </Button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5'>
                {
                    Shoes.map(shoes => <Card key={shoes._id} className='w-full min-w-0 p-4 sm:p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300'>
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
                            <p>{shoes.currency}-{shoes.price}</p>
                            <p>{shoes.description}</p>
                        </div>
                        <div>
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

export default FeaturedShoes;