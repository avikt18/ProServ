import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import LikeButton from "./LikeButton"


export default function SellerCard() {
    const carouselSettings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className="flex flex-col border-[2px] border-black rounded-xl overflow-hidden">
            <div className="flex justify-between items-center mt-2 px-4 "> {/* Seller Card Top Section */}
                <Link href={`/sellers/1`} passHref>
                    <div className="flex cursor-pointer">
                        <Image src='/mock-data/seller-icon.png' alt="seller icon" width='44' height='44' unoptimized={true} />
                        <div className="">
                            <h1 className="">UserName</h1>
                            <div className="flex space-x-1">
                                <Image src='/star.svg' width='10' height='10' alt='rating' />
                                <p className="text-xs">4.9</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <LikeButton style='mb-2' />
            </div>
            <div className="px-2 text-center cursor-pointer">  {/* Seller Card middle carousel */}
                <Slider {...carouselSettings}>
                    <div>
                        <Image src="/mock-data/image1.png" alt="work images" width={300} height={170} layout="responsive" objectFit="cover" />
                    </div>
                    <div>
                        <Image src="/mock-data/image2.png" alt="work images" width={300} height={170} layout="responsive" objectFit="cover" />
                    </div>
                    <div>
                        <Image src="/mock-data/image3.png" alt="work images" width={300} height={170} layout="responsive" objectFit="cover" />
                    </div>
                </Slider>
            </div>
            <p className='font-normal text-black opacity-90 text-sm px-4 my-2'>I will create modern minimalist business logo design</p>  {/* Seller Card bottom info Section */}
            <div className="bg-lightGray flex items-center justify-between w-full px-4 py-1 "> {/* Price Section */}
                <div className="cursor-pointer">
                    <p className="text-darkGray">Starting at:</p>
                    <h1 className="font-secondary text-lg">₹799</h1>
                </div>
                <Link href={`/sellers/1`} passHref><button className="shadow-[3px_3px_0px_black] bg-lightGreen relative cursor-pointer px-4 h-10 font-medium rounded-md text-black">Buy</button></Link>
            </div>
        </div>
    )
};
