'use client'
import { useSession } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const MakupDetails = ({ makupDetails }) => {
    const makup = makupDetails;
    console.log(makupDetails)
    const { data } = useSession()
    const user = data?.user;
    console.log(user)
    const { brand, price, image, name, category } = makup;
    const handleBuySubmit = async () => {
        const booking = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            userEmail: user?.email,
            brand,
            discountPrice: price,
            image,
            productName:name,
            category
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        const data = await res.json()
        toast.success("The makup Product is booked")
        console.log(data)
    }
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


                    <Button onClick={handleBuySubmit} className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>buy now</Button>

                </div>
            </Card>
        </div>
    );
};

export default MakupDetails;