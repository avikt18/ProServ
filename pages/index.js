import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import Button from '../components/Button'
import Footer from '../components/Footer'
import HeroCard from '../components/HeroCard'
import Navbar from '../components/Navbar'
import BecomeSellerModal from '../components/BecomeSellerModal'
import categories from '../data/categories'
import popServices from '../data/PopServices'
import { homeCarouselSettings } from '../utils/carouselSettings'

export default function Home() {
  const { data: session } = useSession()
  const exploreSection = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleExploreClick = () => exploreSection.current.scrollIntoView({ block: "center", behavior: "smooth" });

  useEffect(() => console.log(isModalOpen), [isModalOpen])
  console.log(session);
  return (
    <div>
      <Head>
        <title>Proserv</title>
        <meta name="description" content="Buy and Sell Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="max-w-box w-full h-full absolute -z-30 border-x-[1px] opacity-50 border-black left-1/2 transform -translate-x-1/2" /> */}
      <div className={`container lg:text-left relative text-center px-4 flex flex-col items-center min-w-full font-medium`} >
        {/* Make Seller Account Modal */}
        <BecomeSellerModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

        {/* Navbar */}
        <Navbar setIsModalOpen={setIsModalOpen} />

        {/* HomePage main Card*/}
        <HeroCard handleExploreClick={handleExploreClick} />

        {/* Popular Services Section */}
        <div className="w-full max-w-box md:mt-12 mt-6 md:space-y-8 space-y-4">
          <h1 className="font-medium md:text-4xl text-2xl">Our Popular Services</h1>
          <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-2">
            {popServices.map((service, id) => {
              return (
                <Link key={id} href={`/services/${service}`} passHref>
                  <div className="group hover:shadow-lg flex flex-grow flex-shrink-0 items-center m-2 lg:pl-5 lg:justify-start justify-center sm:h-40 h-24 cursor-pointer border-[1px] border-black shadow-card before:border-[2px] before:top-[-5px] before:left-[-5px] before:transition-colors before:duration-700 hover:before:border-lightGray before:border-lightGreen">
                    <h1 className='transition-all group-active:scale-95 font-semibold text-xl'>{service}</h1>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Services Categories */}
        <div ref={exploreSection} className="w-full max-w-box md:mt-12 mt-6 space-y-8">
          <h1 className="font-medium md:text-4xl text-2xl">Explore the services</h1>
          <Slider {...homeCarouselSettings}>
            {categories.map((category, id) => (
              <Link key={id} href={`/services/${category.name}`} passHref>
                <div className="group h-40 py-6 cursor-pointer border-[1px] border-black rounded-[20px] transition-all">
                  <div className='group-active:scale-95 flex flex-col items-center transition-transform'>
                    <Image src={category.imageURL} alt='category icon' unoptimized='true' width='80' height='80' objectFit='contain' />
                    <h1 className='font-normal text-xl'>{category.name}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>

        {/* HomePage Seller Card  */}
        <div className="w-full min-w-[350px] gcwidth:max-w-[1370px] max-w-box md:py-6 py-6 text-center lg:text-left md:px-8 px-4 flex justify-center items-center relative bg-lightGray mt-8 mb-24 rounded-[20px] shadow-[6px_6px_0px_black]">
          <div className="flex items-center justify-between w-full h-full max-w-box mb-3">
            <div className="w-full flex flex-col items-center lg:items-start">
              <h1 className="font-medium md:text-4xl text-xl md:leading-[50px]">Wanna monetize your skill?<br />Sell your services on WebsiteName</h1>
              <p className='lg:text-lg md:text-lg text-sm md:mt-4 mt-2 font-normal opacity-70'>You do the work,<br />for all services you need</p>
              <div className="md:mt-6 mt-3">
                <button className="bg-lightGreen relative px-4 py-2 font-medium rounded-md text-black shadow-[3px_3px_0px_black] font-secondary" onClick={() => setIsModalOpen(true)}>Become a Seller</button>
              </div>
            </div>
            <div className="mr-10 lg:block hidden">
              <Image src='/girl.svg' height="350.13" width="441" alt='boy illustration' />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  )
}

// export async function getStaticProps(context) {
//   // const res = await fetch('https://localhost:3000/api/pservices')
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

