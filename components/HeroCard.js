import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Animation.module.css'
import { cardAnimation, container, headingAnimation, mainCard } from '../utils/animationValues'
import Button from './Button'

export default function HeroCard({handleExploreClick}) {
    const [heading, setHeading] = useState(true)
    useEffect(() => {
        const animationInterval = setInterval(() => setHeading(!heading), 6000)
        return () => clearInterval(animationInterval)
    }, [heading])

    return (
        <motion.div variants={mainCard} initial="hidden" animate="visible" className={`w-full min-w-[350px] gcwidth:max-w-[1370px] max-w-box lg:h-[443px] md:h-[343px] md:py-4 py-6 text-center lg:text-left md:px-8 px-4 flex justify-center items-center relative bg-lightGreen my-3 rounded-[20px] shadow-[6px_6px_0px_black]`}>
            <div className="flex items-center justify-between w-full h-full max-w-box">
                <div className="xl:w-1/2 w-full md:mb-8 flex flex-col items-center lg:items-start">
                    <AnimatePresence exitBeforeEnter>
                        {heading ? (
                            <motion.h1 key={1} variants={headingAnimation} initial='LgInitialHeading' animate='visibleHeading' exit='exitHeading' className={`font-semibold lg:text-bigHeading md:text-4xl text-2xl lg:leading-[64px] md:mb-4 mb-2`}>Struggling to find services for your business?</motion.h1>
                        ) : (
                            <motion.h1 key={2} variants={headingAnimation} initial='LgInitialHeading' animate='visibleHeading' exit='exitHeading' className={`font-semibold lg:text-bigHeading md:text-4xl text-2xl lg:leading-[64px] md:mb-4 mb-2`}>Find all the services you need<br className='lg:hidden sm:block hidden' /> at one place </motion.h1>
                        )}
                    </AnimatePresence>
                    <p className='lg:text-xl md:text-lg text-sm opacity-80'>One stop solution
                        <br className='' />for all services you need</p>
                    <div className="hidden md:block w-3/4 h-[2px] bg-black opacity-70 rounded-sm md:my-7 my-3" />
                    <div className="space-x-6 mt-4 md:mt-0">
                        <button className=" bg-black px-4 py-2 font-medium rounded-md text-white font-secondary" onClick={handleExploreClick}>Explore</button>
                        <Button style="px-4 py-2 font-medium rounded-md text-black border-[1px] border-black font-secondary" >How it works</Button>
                    </div>
                </div>
                <AnimatePresence exitBeforeEnter>
                    {heading ? (
                        <motion.div key={1} variants={cardAnimation} initial='hiddenSvg' animate='visibleSvg' exit='hiddenSvg' className={` ${styles.animateFloat} mr-10 lg:block hidden`}>
                            <Image src='/boy.svg' height="350.13" width="441" alt='boy illustration' />
                        </motion.div>
                    ) : (
                        <motion.div key={2} variants={cardAnimation} initial='hiddenSvg' animate='visibleSvg' exit='hiddenSvg' className={` ${styles.animateFloat} mr-10 lg:block hidden`}>
                            <Image src='/card-girl.svg' height="350.13" width="441" alt='girl illustration' />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
};
