import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import LoginBoy from '../public/assets/Icons/LoginBoy.svg'
import Logo from '../public/assets/Icons/Logo.svg'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Login() {


    const { data: session } = useSession()
    return (
        <>
            {(!session) && (
                <div className="container md:w-full flex flex-col justify-center items-center font-secondary font-medium mt-20">
                    <Image className='mt-20' src={Logo} height={66.5} width={198} alt='Logo' ></Image>
                    <div className="flex flex-col md:flex-row items-center justify-between w-full h-full max-w-box mt-20  mx-auto">
                        <div className=" w-10/12 md:w-1/2 mb-8 verticalLine ">
                            <div className='loginCard  md:mx-10 xl:mx-20'>
                                <form className='flex flex-col'>
                                    <h1 className='mx-5 mt-5 sm:mx-10 sm:mt-10'>Email</h1>
                                    <input type="text" defaultValue="" className='px-2 mx-5 sm:mx-10 loginForm'></input>
                                    <h1 className='mx-5 mt-3 sm:mx-10 sm:mt-5'>Password</h1>
                                    <input type="password" defaultValue="" className='px-2 mx-5 mb-3 sm:mb-5 sm:mx-10 loginForm'></input>
                                    <div className="loginButton ml-5 mb-5 sm:ml-10 ">
                                        <Button style=" py-1 pl-4 font-medium rounded-md text-black " onClick={()=>signIn}>Log In</Button>
                                    </div>
                                    <div className='flex flex-col sm:flex-row'>
                                        <h4 className="ml-5 sm:ml-10 sm:mb-5">{"Don't Have an Account?"}</h4>
                                        <h7 className="ml-5 mb-5 sm:mb-0 sm:ml-1 signupText"><Link href='/signup'>Sign Up</Link></h7>
                                    </div>
                                    <div className='flex flex-col sm:flex-row'>
                                        <h4 className="ml-5 sm:ml-10 sm:mb-5">{"Sign In with Google?"}</h4>
                                        <h7 className="ml-5 mb-5 sm:mb-0 sm:ml-1 signupText"><Link href='/api/auth/signin'>Google</Link></h7>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="sm:w-full md:w-1/2 ">
                            <Image src={LoginBoy} className='vertical' type="image/svg+xml" height="300" width="470" alt="boy illustration" />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}