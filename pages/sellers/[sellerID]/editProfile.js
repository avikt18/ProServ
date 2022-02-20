import { motion } from 'framer-motion'
import Image from 'next/image'
import Logo from '../../../components/Logo'
import categories from '../../../data/categories'

export default function editProfile() {
    return (
        <div className='bg-superlightGray min-h-screen relative'>
            <div className="absolute pointer-events-none min-h-full min-w-full">
                <Image src='/Grid.svg' layout='fill' objectFit='cover' alt='' />
            </div>
            <div className="min-w-full min-h-full flex justify-center px-4 pb-8">
                <div className="w-full max-w-[1080px] flex flex-col items-center justify-center px-4">
                    <div className="my-3">
                        <Logo />
                    </div>
                    <div className="w-full py-6 px-8 bg-white border-2 border-black relative rounded-[20px] shadow-[4px_4px_0px_#808080]">
                        <div className='flex justify-between relative'>
                            <div className="flex-1 space-y-4 relative">
                                <div>
                                    <h1 className="font-semibold text-2xl mb-2">Personal Information</h1>
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" id='fullName' maxLength={50} className='w-full p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                    <label htmlFor="">Mobile no.</label>
                                    <input type="tel" maxLength={12} id='' className='w-full p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                    <label htmlFor="">Work Email</label>
                                    <input type="email" id='' className='w-full p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                    <label htmlFor="">Address</label>
                                    <input type="text" id='' className='w-full p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                    <label htmlFor="">Username</label>
                                    <input type="text" id='' className='w-full p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                    <label htmlFor="">Bio</label>
                                    <input type="text" maxLength={100} id='' className='w-full p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                </div>
                                <div>
                                    <h1 className="font-semibold text-2xl mb-2">Service Information</h1>
                                    <label htmlFor="service">Your Skill:<span className='opacity-70 text-sm'> (Services you want to sell)</span></label>
                                    <select required name="service" id="service" className='block cursor-pointer w-full p-2 mt-1 bg-superlightGray rounded-md focus-visible:outline-none' >
                                        <option className='hidden' selected></option>
                                        {categories.map(({ name }) => <option key={name} id={name} value={name} >{name}</option>)}
                                    </select>
                                </div>
                                <div className=''>
                                    <h1 className="font-semibold text-2xl mb-2">Set Plans</h1>
                                    <div>
                                        <div className='flex justify-between mb-1'>
                                            <h2>Plan Name</h2>
                                            <h2 className='mr-3'>Pricing</h2>
                                        </div>
                                        <div className='flex justify-between'>
                                            <label htmlFor='basic-plan' className='opacity-70'>Basic</label>
                                            <input type="number" maxLength={5} min={1} name="basic-plan" id="basic-plan" className='w-20 p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <label htmlFor='standard-plan' className='opacity-70'>Standard</label>
                                            <input type="number" maxLength={5} min={1} name="standard-plan" id="standard-plan" className='w-20 p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <label htmlFor='premium-plan' className='opacity-70'>Premium</label>
                                            <input type="number" maxLength={5} min={1} name="premium-plan" id="premium-plan" className='w-20 p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <h1 className="font-semibold text-2xl mb-2">Your Work</h1>
                                    <label htmlFor="">Your Portfolio</label>
                                    <input type="url" maxLength={100} id='' className='w-full p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                    <label htmlFor="">Your Specialty:<span className='opacity-70 text-sm'> (Why should the customer choose you)</span></label>
                                    <input type="text" maxLength={100} id='' className='w-full p-2 mb-2 bg-superlightGray rounded-md focus-visible:outline-none' />
                                    <label htmlFor="work-file">Upload your previous work<span className='opacity-70 text-sm'> (This will be displayed on your profile)</span></label>
                                    <input type="file" id="work-file" className='mt-2 ' name="work-file"></input>
                                </div>
                                <button className="shadow-[3px_3px_0px_black] bg-lightGreen relative cursor-pointer px-4 h-10 font-medium rounded-md text-black">Make Profile</button> {/* Edit Profile if seller profile is already set */}
                            </div>
                            <div className="flex-1 relative flex flex-col items-center mt-10">
                                <motion.img src='/default-user-photo.svg' className='w-32 cursor-pointer ' />  {/* Change to user selected  */}
                                <h2 className='mt-2 text-lg font-medium cursor-pointer'>Upload User Photo</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
