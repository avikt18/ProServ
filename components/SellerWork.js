import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Slider from "react-slick";
import { workCarouselSettings } from "../utils/carouselSettings";


export default function ChoosePlan(params) {
    const router = useRouter()
    let handleClick = () => {
        router.push({
            pathname: router.pathname,
            query: { ...router.query, choosePlan: '1' },
        })
    }

    return (
        <>
            {/* <h1 className='font-semibold text-3xl mx-auto'>My Work</h1> */}
            <div className="px-2 mt-2 text-center ">
                <Slider {...workCarouselSettings}>
                    <div>
                        <Image src="/mock-data/image1.png" alt="work images" width={300} height={140} layout='responsive' objectFit="cover" />
                    </div>
                    <div>
                        <Image src="/mock-data/image2.png" alt="work images" width={300} height={140} layout='responsive' objectFit="cover" />
                    </div>
                    <div>
                        <Image src="/mock-data/image3.png" alt="work images" width={300} height={140} layout='responsive' objectFit="cover" />
                    </div>
                </Slider>
            </div>
            <div className="thin-scrollbar px-4 mt-2 relative overflow-y-auto overflow-x-hidden h-52">
                <h1 className="text-lg font-semibold">Description</h1>
                <p className="text-sm font-light opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum dolor eos molestias minima, iure doloremque cum delectus sint dicta ducimus voluptas magnam dolore rem non corrupti tempore neque voluptate!</p>
                
                <h1 className="text-lg font-semibold">Why me?</h1>
                <p className="text-sm font-light opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum dolor eos molestias minima, iure doloremque cum delectus sint dicta ducimus voluptas magnam dolore rem non corrupti tempore neque voluptate</p>
                <div className="sticky bottom-0 w-full h-10 bg-gradient-to-t from-[rgba(255,255,255,1)0%] to-[rgba(255,255,255,0)100%]"></div>
            </div>
            
            <div className="w-full left-0 flex justify-end items-center absolute bottom-0 border-t-[1px] border-black p-6 bg-superlightGray">
                <div>
                    <motion.button
                        onClick={handleClick}
                        whileTap={{ scale: 0.98 }}
                        className="shadow-[3px_3px_0px_black] bg-lightGreen disabled:bg-lightGray disabled:opacity-60 disabled:cursor-not-allowed relative cursor-pointer px-4 pr-6 h-10 font-medium rounded-md group text-black"
                    >   View Plans <span className='absolute transition-all ml-1 group-hover:translate-x-1' >{'>'}</span>
                    </motion.button>
                </div>
            </div>
        </>
    )
};
