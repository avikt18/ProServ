import { motion } from 'framer-motion'
import { debounce, lowerCase, upperFirst } from 'lodash'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import DropDown from '../../components/DropDown'
import categories from '../../data/categories'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PriceSlider from '../../components/PriceSlider'
import SellerCard from '../../components/SellerCard'
import { useSession, getSession } from 'next-auth/react'
import BecomeSellerModal from '../../components/BecomeSellerModal'

export async function getServerSideProps(context) {
    const serviceName = context.params.serviceName
    const session = await getSession(context)
    console.log(session);
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/${serviceName}`,
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}


export default function ServicePage() {
    const { query } = useRouter()
    const router = useRouter()
    const [serviceName, setServiceName] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        setServiceName(query?.serviceName)
    }, [query])

    const handleSelect = (name) => {
        router.push(`${name}`)
    }

    const handleSearch = debounce(searchText => {
        console.log(searchText);
    }, 500)

    return (
        <div>
            <Head>
                <title>{serviceName} Services by Proserv</title>
                <meta name="description" content="Buy and Sell Services" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container relative lg:text-left text-center px-4 flex flex-col items-center min-w-full font-medium">
                {/* Make Seller Account Modal */}
                <BecomeSellerModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

                {/* Navbar */}
                <Navbar setIsModalOpen={setIsModalOpen} />
                {/* Search and Filter */}
                <div className="relative flex flex-wrap justify-center items-center md:flex-nowrap md:space-x-4 md:space-y-0 space-y-2  w-full my-4 max-w-box font-secondary">
                    <div className="flex w-full border-[2px] border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_#C4C4C4]">
                        <motion.img src='/search-icon.svg' alt='search-icon' className='mx-3' />
                        <input type="search" placeholder='search services and sellers' className='w-full px-2 py-3 focus-visible:outline-none' onChange={e => handleSearch(e.target.value)} />
                    </div>
                    <DropDown style='w-full md:max-w-[240px] border-2 border-black rounded-xl px-4 py-3 shadow-[4px_4px_0px_#C4C4C4]' list={categories} title={serviceName} handleSelect={handleSelect} />
                    <div className="md:w-3/4 w-full ml-4 text-left">
                        <p>Price</p>
                        <PriceSlider />
                    </div>
                </div>
                {/* Service Sellers List section*/}
                <div className="w-full max-w-box flex flex-col md:space-y-6 mt-1 space-y-4 mb-24">
                    <h1 className="font-medium md:text-4xl text-2xl">{upperFirst(lowerCase(serviceName)) || "Loading..."}</h1>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                        {[...Array(10).keys()].map((seller, id) => <SellerCard key={id} />)}  {/* replace array with actual list of sellers */}
                    </div>
                </div>
                {/* Footer  */}
                <Footer />
            </div>
        </div>
    )
};
