import { getDressProduct } from '@/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedDress = async () => {
    const DressProduct = await getDressProduct();
    const featuredDress = DressProduct.slice(0, 4);
    return (
        <div className='p-10 space-y-4'>
            <div className='text-center container max-auto'>
                <h2 className='font-bold text-2xl text-[#26382B]'>Women's Dresses</h2>
                <p className='text-[#60483B]'>Explore our beautiful collection of women's dresses, perfect for every occasion and everyday elegance.</p>
            </div>
            <div className='flex justify-end'>
                <Button className={'bg-none bg-transparent text-[#26382B] border border-gray-300 rounded-xl'}>
                    <Link href={'/products/dress'}>See All </Link>
                    <FaArrowRight />
                </Button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    featuredDress.map(dress => <Card key={dress._id} className="bg-[#FFF5E4] w-full min-w-0 sm:p-6 hover:translate-y-2 hover:shadow-xl transition-all duration-300 m-10 rounded-xl   ">
                        <div className='w-full'>
                            <Image src={dress.image}
                                alt={dress.image}
                                width={400} height={400}
                                className='w-full h-[400px] rounded-4xl object-contain '
                            ></Image>
                        </div>
                        <div className='w-full space-y-2 p-3' >
                            <div className='w-full space-y-2'>
                                <h2 className='text-2xl text-[#7B2024] font-bold '>{dress.name}</h2>
                                <p className='text-[#60483B]'>Price: ${dress.price}</p>
                            </div>
                            <div>
                                <Link href={`/products/dress/${dress._id}`}>
                                    <Button className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>Buy Now</Button>
                                </Link>
                            </div>
                        </div>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default FeaturedDress;