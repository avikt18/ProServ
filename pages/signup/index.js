import Image from 'next/image'
import Logo from '../../components/Logo'
import { getProviders, useSession, signIn, getSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import { container, child } from '../../utils/animationValues'
import { useRouter } from 'next/router'


export default function Signup({ providers }) {
    const { data: session } = useSession()
    return (
        <div>
            <div className="bg-superlightGray absolute -z-20 min-h-full w-full"></div>
            <div className="absolute pointer-events-none min-h-full min-w-full">
                <Image src='/Grid.svg' layout='fill' objectFit='cover' alt='' />
            </div>
            <div className="min-w-full min-h-full flex justify-center">
                <div className="w-full max-w-[1080px] flex flex-col items-center justify-center px-4">
                    <div className="mt-8 lg:my-24">
                        <Logo />
                    </div>
                    <h1 className='relative lg:-top-14 font-semibold text-3xl'>Sign Up</h1>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col-reverse lg:flex-row w-full items-center lg:items-stretch lg:justify-between space-y-7 lg:space-y-0"
                    >
                        <div className="w-full my-auto md:h-32 h-24 max-w-md space-y-3 bg-white border-[2px] border-black shadow-card before:bg-[#808080] ">
                            {Object.values(providers).map((provider) => (
                                <div key={provider.name} className='flex flex-col cursor-pointer justify-center items-center h-full' onClick={() => signIn(provider.id)}>
                                    <motion.img src='/google.png' className='w-20 mb-2' />
                                    <p className='text-sm md:text-[16px] ' >
                                        SignUp with <span className='underline text-gray-500'>{provider.name}</span>
                                    </p>
                                </div>
                            ))}
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

export async function getServerSideProps(context) {
    const session = getSession()
    console.log(session);
    // if(session ) {
    //     return {
    //         redirect: {
    //           permanent: false,
    //           destination: "/",
    //         }
    //       };
    // }
    const providers = await getProviders()
    return {
        props: { providers },
    }
}