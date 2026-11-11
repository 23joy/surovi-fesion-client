import React from 'react';
import Image from 'next/image';
import image from '../../public/cover.jpg'
import { Button } from '@heroui/react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-7xl mx-auto p-10 justify-between gap-5 '>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3">
                <h2 className='font-extrabold text-8xl text-[#26382B]'>Surovi Fashion</h2>
                <p className='text-[#75685D]'>Discover your style with timeless fashion, beautiful designs, and outfits that make every moment special.</p>
                <Button className={'bg-[#7B2024] text-[#FFFFFF]'}>Shop Your Style</Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <Image src={image} alt='image'
                height={800} width={600}
                className='w-full h-[600px]'
                ></Image>
            </div>
        </div>
    );
};

export default Banner;