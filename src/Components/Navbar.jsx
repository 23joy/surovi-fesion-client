'use client'
import React from 'react';
import logo from '../../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { Button, Label, SearchField } from '@heroui/react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { signOut, useSession } from '@/lib/auth-client';

const Navbar = () => {
    const { data, isPending } = useSession()
    const user = data?.user;
    console.log(user)
    return (
        <div className='bg-[#87977B] flex justify-between items-center px-5 gap-3'>
            <div>
                <Image src={logo} alt='logo' width={150} height={150}
                    className="w-[100px] h-auto sm:w-[120px] md:w-[150px] object-contain"
                ></Image>
            </div>
            <div>
                <SearchField name="search">
                    <SearchField.Group>
                        <SearchField.Input className="w-[280px] bg-white rounded-2xl p-2" placeholder="Search here" />
                    </SearchField.Group>
                </SearchField>
            </div>
            <div className='flex justify-between gap-2 items-center'>
                {user ? <>
                    <p>Welcome!{user?.name}</p>
                    <Button
                     className={'bg-none bg-transparent borderhover:bg-[#344238] rounded-2xl'}
                     onClick={()=>signOut()}
                    >
                        Logout</Button>

                </> :
                    <>
                        <Link href={'/auth/signIn'} className=" text-white ">
                            <Button className={'bg-none bg-transparent border  hover:bg-[#344238] rounded-2xl'}>SignIn</Button>
                        </Link>
                        <Link href={'/auth/signUp'} className=" text-white" >
                            <Button className={'bg-none bg-transparent border  hover:bg-[#344238] rounded-2xl'} >Resister</Button>
                        </Link>
                    </>
                }
            </div>
            <div>
                <FaCartShopping />
            </div>
        </div>
    );
};

export default Navbar;