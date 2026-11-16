import BookingDelete from '@/Components/BookingDelete';
import { auth } from '@/lib/auth';
import { signOut } from '@/lib/auth-client';
import { Button, Card, Separator } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export const instant = false;

const myBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    console.log(user)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/booking/${user?.id}`)
    const bookings = await res.json()
    console.log(bookings)
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-center font-bold  pb-10 text-2xl'>My booking</h2>
            <div className='flex justify-between gap-10 '>

                <Card >
                    <div className='flex flex-col items-center space-y-5'>
                        <Image src={user?.image}
                            alt={user?.image}
                            width={100}
                            height={100}
                            className='rounded-full '
                        ></Image>
                        <div className='text-center'>
                            <h2 className='font-bold'>{user?.name}</h2>
                            <p className='text-gray-700'>{user?.email}</p>
                        </div>
                        <Separator />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Link href={'/mybooking'} defaultValue={'/mybooking'}>
                            <Button className='bg-none bg-red-900 w-full'>My Booking</Button>
                        </Link>
                        <Link href={'/mybooking'} defaultValue={'/mybooking'}>
                            <Button className='bg-none bg-red-900 w-full'>My Profile</Button>
                        </Link>
                        <Button className='bg-none bg-red-900 w-full'>Logout</Button>

                    </div>
                </Card>
                <div className='container mx-auto space-y-10'>
                    {
                        bookings.map(booking => <div key={booking?._id} className='flex  gap-10'>
                            <div>
                                <Image src={booking?.image}
                                    alt={booking?.image}
                                    width={200}
                                    height={200}
                                    className='contain-content'
                                ></Image>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='flex items-center gap-20'>
                                    <div>
                                        <h2 className='font-bold text-2xl'>{booking?.productName}</h2>
                                        <p className='font-semibold text-gray-700'>Category: {booking?.category}</p>
                                        <p className='font-semibold text-gray-700'>Brand: {booking?.brand}</p>
                                    </div>
                                    <div>
                                        <p>confirm</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center gap-20'>
                                    <div>
                                        <p className='font-semibold text-gray-700'>Discount: {booking?.discount}%</p>
                                        <p className='font-semibold text-gray-700'>Price: {booking?.discountPrice}</p>
                                    </div>
                                    <div>
                                        <button className='bg-red-800 text-white p-1 rounded-xl'>View Details</button>
                                    </div>
                                </div>
                                <BookingDelete bookingId={booking?._id}></BookingDelete>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default myBookingPage;