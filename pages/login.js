import Button from '../components/Button'
import Image from 'next/image'
import Logo from '../components/Logo'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import { container, child } from '../utils/animationValues'

export default function Login() {
    const { data: session } = useSession()
    const handleLogin = (e) => {
        e.preventDefault()
        console.log('logged in');
        // signIn();
    }
    return (
        <>
            {(!session) && (
                <div className='bg-superlightGray min-h-screen'>
                    <div className="absolute pointer-events-none min-h-full min-w-full">
                        <Image src='/Grid.svg' layout='fill' objectFit='cover' alt='' />
                    </div>
                    <div className="min-w-full min-h-full flex justify-center">
                        <div className="w-full max-w-[1080px] flex flex-col items-center justify-center px-4">
                            <div className="mt-8 lg:my-24">
                                <Logo />
                            </div>
                            <h1 className='relative -top-14 font-semibold text-3xl'>Login</h1>
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col-reverse lg:flex-row w-full items-center lg:items-stretch lg:justify-between space-y-7 lg:space-y-0"
                            >
                                <div className="sm:w-full max-w-md w-80 p-5 sm:p-8 space-y-3 bg-white border-[2px] border-black relative rounded-[20px] shadow-[6px_6px_0px_#808080] ">
                                    <form className='flex flex-col items-start font-medium'>
                                        <label className='mb-2 text-sm md:text-[16px]'>Email</label>
                                        <input className='w-full bg-superlightGray mb-5 rounded-md px-2 py-3 focus-visible:outline-none' type="text" id="email" name="email" />
                                        <label className='mb-2 text-sm md:text-[16px]' >Password</label>
                                        <input className='w-full bg-superlightGray mb-5 rounded-md px-2 py-3 focus-visible:outline-none ' type="password" autoComplete='off' name="password" />
                                        {/* button back overlay */}
                                        {/* <div className="">
                                            <div className="bg-black absolute translate-y-1 translate-x-1 px-5 py-2 font-medium rounded-md text-black font-secondary">Login</div>
                                        </div> */}
                                        <input type="submit" value="Login" className='shadow-[3px_3px_0px_black] bg-lightGreen relative mb-3 cursor-pointer px-5 py-2 font-medium rounded-md text-black font-secondary' onClick={handleLogin} />
                                    </form>
                                    <p className='text-sm md:text-[16px]'>
                                        Don{`'`}t have an account? <Link href='/signup'><a className='underline text-gray-500'>SignUp</a></Link>
                                    </p>
                                </div>
                                <div className=" w-[2px] rounded-sm bg-[#808080] opacity-60" />
                                <div className="flex flex-col items-center">
                                    <h1 className="text-lg lg:text-4xl font-semibold">
                                        Headstart your business<br />
                                        with third-party services
                                    </h1>
                                    <motion.div
                                        variants={child}
                                        className="mt-4 w-32 lg:w-auto"
                                    >
                                        <Image src='/LoginBoy.svg' className='vertical' layout='intrinsic' height="200" width="370" objectFit='contain' alt="boy illustration" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}
