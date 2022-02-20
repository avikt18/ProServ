import { useState } from 'react'
import DropDown from './DropDown'
import categories from '../data/categories'
import { motion, AnimatePresence } from 'framer-motion'
import DeliverWorkModal from './DeliverWorkModal'

export default function OrdersList(params) {
    // POV Seller: this is the list of services that the seller provide
    const [selectedService, setSelectedService] = useState(categories[0].name)
    const handleSelect = (name) => setSelectedService(name)

    const [isModalOpen, setIsModalOpen] = useState(false)


    return (
        <div>
            <DeliverWorkModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <DropDown style='max-w-[200px] bg-superlightGray p-1 px-2 rounded-md mx-auto font-normal' list={categories} title={selectedService} handleSelect={handleSelect} /> {/* POV Seller only */}
            <div className="mt-2 space-y-3 overflow-auto h-[500px]">
                {[...Array(10).keys()].map(order => {
                    return (
                        <div key={order} className="relative overflow-hidden w-full rounded-xl bg-superlightGray p-4 pb-11 font-normal">
                            <div className="grid grid-cols-2 border-darkGray ">
                                <h2>Order ID:</h2>
                                <h2>Plan Chosen:</h2>
                                <h2>Ordered By:</h2>
                                <h2>Service:</h2>
                            </div>
                            <div className='w-full h-[1px] bg-lightGray my-2' />
                            <div className="">
                                <h2 className=''>Special Instructions:</h2>
                                <p className='opacity-80 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta, sapiente molestias similique reiciendis dolor quibusdam excepturi laboriosam fugit aspernatur labore deleniti dolore beatae natus neque tempore ex? Repudiandae, aspernatur!</p>
                            </div>
                            <h2 className='text-red-500 my-1'>Deadline:</h2>
                            {/* <h2 className='my-1'>Status: <span className='italic'>Not Delivered</span></h2> Buyer POV */}
                            <button onClick={() => setIsModalOpen(true)} className="absolute bottom-0 left-0 transition-colors bg-lightGray hover:bg-lightGreen w-full p-2 text-center disabled:bg-lightGreen group disabled:italic" > {/* disabled = {isCompleted} */}
                                <motion.p className='group-disabled:opacity-75' whileTap={{ scale: 0.95 }}  >Deliver</motion.p>
                                {/* <motion.p className='group-disabled:opacity-75' whileTap={{ scale: 0.95 }}>Deliver</motion.p> */}  {/* Buyer POV */}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
