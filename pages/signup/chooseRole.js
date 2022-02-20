import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Logo from '../../components/Logo'
import { 
mainCard } from '../../utils/animationValues'

export default function ChooseRole() {
    const { data: session } = useSession()
    const handleSignUp = () => {
        e.preventDefault()
        //add signUp functionality
    }
    return (
        <>
            {(!session) ? (
                <div>
                    <div className="bg-superlightGray absolute -z-20 min-h-full w-full"></div>
                    <div className="absolute pointer-events-none min-h-full min-w-full">
                        <Image src='/Grid.svg' layout='fill' objectFit='cover' alt='' />
                    </div>
                    <div className="min-w-full min-h-full flex justify-center select-none">
                        <div className="w-full max-w-xl flex flex-col items-center justify-center px-4">
                            <div className="mt-8 sm:my-24">
                                <Logo />
                            </div>
                            <h1 className='relative sm:-top-14 top-2 font-semibold text-3xl'>Sign Up</h1>
                            <motion.div
                                variants={mainCard}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col-reverse sm:flex-row w-full items-center mt-10 sm:mt-0 sm:justify-between sm:space-y-0"
                            >
                                <motion.div className="cursor-pointer group rounded-2xl max-w-[300px] sm:w-52 mb-4 sm:mb-0 w-full h-24 sm:h-52 flex items-center justify-center bg-white border-[2px] border-black transition-all duration-300 hover:shadow-[3px_3px_0px_#DEF348] shadow-[4px_4px_0px_#808080] ">
                                    <h1 className='text-xl font-medium group-active:scale-95'>Buyer</h1>
                                </motion.div>
                                <motion.div className="cursor-pointer group rounded-2xl max-w-[300px] sm:w-52 mb-4 sm:mb-0 w-full h-24 sm:h-52 flex items-center justify-center bg-white border-[2px] border-black transition-all duration-300 hover:shadow-[3px_3px_0px_#DEF348] shadow-[4px_4px_0px_#808080] ">
                                    <h1 className='text-xl font-medium group-active:scale-95'>Seller</h1>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )
                : null}  {/* replace null with redirect(/home) */}
        </>
    )
}

