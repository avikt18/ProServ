import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DeliverWorkModal from '../../../components/DeliverWorkModal'
import LikeButton from '../../../components/LikeButton'
import RightCardContentBuyerPOV from '../../../components/RightCardContentBuyerPOV'
import RightCardContentSellerPOV from '../../../components/RightCardContentSellerPOV'


export default function SellerProfile() {
    const router = useRouter()
    
    return (
        <div className='relative bg-superlightGray min-h-screen'>
            <div className="fixed pointer-events-none min-h-full min-w-full">
                <Image src='/Grid.svg' layout='fill' objectFit='cover' alt='' />
            </div>
            <div className="container lg:text-left relative text-center px-4 flex justify-center items-center min-w-full font-medium ">
                {/* Seller POV */}

                {/* The Whole Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                    className="relative flex w-full max-w-screen-lg space-x-3 mt-11"
                >
                    <div className="group flex items-center absolute -top-9 left-4 cursor-pointer" onClick={() => router.back()}>
                        <motion.img src='/back-arrow.svg' className='w-7 transition-transform group-hover:-translate-x-1' alt='close' />
                        <p className='ml-2'>back</p>
                    </div>
                    {/* Left Part of Card */}
                    <div className="p-6 w-[440px] h-[680px] bg-white rounded-xl space-y-3 border-[1px] border-black shadow-[4px_4px_0px_#808080]">
                        <div className="flex flex-col items-center text-center bg-lightGreen p-4 relative rounded-lg space-y-2">
                            <LikeButton style='absolute right-0 mr-4' />
                            <div className="rounded-full overflow-hidden w-48 h-48">
                                <Image src='/mock-data/user-photo.png' alt='user-photo' objectFit='cover' width={220} height={220} unoptimized />
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className="text-xl">Username</h1>
                                <div className="flex space-x-1">
                                    <Image src='/star-black.svg' width='12' height='12' alt='rating' />
                                    <p className="text-xs">4.9</p>
                                </div>
                            </div>
                            <p className="text-darkGray text-sm font-light">This is my Bio. I will write here whatever i want and by anything i mean anything.</p>
                            <motion.button whileTap={{ scale: 0.98 }} className='bg-white border-2 border-black p-2 font-medium text-sm rounded-md focus-visible:outline-none shadow-[3px_3px_0px_#000]'>
                                Contact Me
                            </motion.button>
                        </div>
                        <div className='space-y-1'>
                            <h1 className=''>Skills</h1>
                            <div className="flex flex-wrap gap-1">
                                <p className='text-sm font-light bg-superlightGray py-1 px-2 opacity-90 rounded-md'>Logo Design</p>
                                <p className='text-sm font-light bg-superlightGray py-1 px-2 opacity-90 rounded-md'>Video Editing</p>
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <h1 className=''>Reviews</h1>
                            <div className='overflow-auto'>
                                <div>
                                    <h2 className='text-sm flex opacity-90'>
                                        <motion.img src='/star-black.svg' width='10' height='10' className='mr-1 opacity-90' alt='rating' />
                                        {/* actual rating */}
                                        5
                                    </h2>
                                    <p className="text-sm font-light opacity-75">{'"The work was above expectation!"'}</p>
                                </div>
                                <div>
                                    <h2 className='text-sm flex opacity-90'>
                                        <motion.img src='/star-black.svg' width='10' height='10' className='mr-1 opacity-90' alt='rating' />
                                        {/* actual rating */}
                                        4.9
                                    </h2>
                                    <p className="text-sm font-light opacity-75">{'“Nice work 👏👏. Delivery on time.”'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Part of card */}
                    <div className="relative overflow-hidden w-full p-6 flex flex-col bg-white rounded-xl border-[1px] border-black shadow-[4px_4px_0px_#808080]">
                        <RightCardContentSellerPOV />
                    </div>
                </motion.div>
            </div>
        </div>
    )
};
