'use client'
import { useSession } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

const DressDetails = ({ productDetails }) => {
    console.log(productDetails)
    const{_id,name,discount,discountPrice,image,category,brand}=productDetails;
    const { data } = useSession()
    const user = data?.user;
    //console.log(user)


    const handleBuySubmit = async (e) => {
        const booking={
            userId:user?.id,
            userName:user?.name,
            userImage:user?.image,
            productId:_id,
            productName:name,
            discount,
            discountPrice,
            image,
            category,
            brand,
        }
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/booking`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        const data=await res.json()
        toast.success("The product are booking")
        console.log(data)
    }
    return (
        <Card className="bg-[#FFF5E4] m-10 rounded-xl  flex justify-between items-center gap-3 sm:flex-row md:flex-row ">
            <div className='w-full'>
                <Image src={productDetails.image}
                    alt={productDetails.image}
                    width={400} height={400}
                    className='w-full h-[400px] rounded-4xl object-contain '
                ></Image>
            </div>
            <div className='w-full space-y-2 p-3' >
                <div className='w-full space-y-2'>
                    <h2 className='text-2xl text-[#7B2024] font-bold '>{productDetails.name}</h2>
                    <p className='text-[#60483B]'>{productDetails.description}</p>
                </div>
                <div>
                    <Button onClick={handleBuySubmit} className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>Buy Now</Button>
                </div>
            </div>
        </Card>
    );
};

export default DressDetails;