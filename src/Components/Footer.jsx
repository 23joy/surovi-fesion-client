import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-[#87977B]'>
            <div className='container mx-auto p-10 flex justify-between items-center'>
                <div className='space-y-3'>
                    <h2 className='font-extrabold text-3xl text-[#26382B]'>Surovi Fashion</h2>
                    <p>This fashion is our style</p>
                </div>
                <div className='space-y-3'>
                    <h2>01774525288</h2>
                    <p>joyshreeroy@gmail.com</p>
                    <div className='flex gap-5'>
                        <FaTwitter/>
                        <FaFacebook/>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center gap-8 p-10'>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;