import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShoesDetails = async ({ shoes }) => {
    console.log(shoes)
    return (
        <Card className="bg-[#FFF5E4] m-10 rounded-xl  flex justify-between items-center gap-3 sm:flex-row md:flex-row ">
            <div className='w-full'>
                <Image src={shoes.image}
                    alt={shoes.image}
                    width={400} height={400}
                    className='w-full h-[400px] rounded-4xl object-contain '
                ></Image>
            </div>
            <div className='flex flex-col space-y-3'>
                <h2>{shoes.name}</h2>
                <p>{shoes.currency}-{shoes.price}</p>
                <p>{shoes.description}</p>
                <Button className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>
                    <Link href={'/'}>Buy Now</Link>
                </Button>
            </div>

        </Card>
    );
};

export default ShoesDetails;