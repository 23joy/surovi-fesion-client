'use client'
import { useSession } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const ShoesDetails = ({ shoes }) => {
    //console.log(shoes)
    const { category, image, name,price } = shoes;
    const { data } = useSession();
    const user = data?.user;
    //console.log(user)
    const handleBuySubmit =async () => {
        const booking = {
            userId: user?.id,
            userName: user?.name,
            useremail: user?.email,
            userImage: user?.image,
            category,
            image,
            discountPrice:price,
            productName:name
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        const data = await res.json()
        toast.success("The product are booking")
        if(data){
            redirect('/mybooking')
        }
        console.log(data)
    }
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
                <Button onClick={handleBuySubmit} className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>
                    Buy Now
                </Button>
            </div>

        </Card>
    );
};

export default ShoesDetails;