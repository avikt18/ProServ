import { Modal } from "@mui/material"
import { motion } from "framer-motion"

export default function DeliverWorkModal({ isOpen, setIsModalOpen }) {
    return isOpen ? (
        <Modal open={isOpen} onClose={() => setIsModalOpen(false)}>
            <div className="bg-white relative px-6 py-4 flex flex-col items-center absolute-center opacity-100 border-[1px] outline-none w-full sm:max-w-lg border-black bg-sup rounded-2xl shadow-[4px_4px_0px_#000] ">
                <div className="group flex items-center absolute -top-7 right-4 cursor-pointer" onClick={() => setIsModalOpen(false)}>
                    <motion.img src='/cross.svg' className='w-4' alt='close' />
                </div>
                <h1 className='font-medium mb-3 text-2xl'>Deliver your work</h1>
                <form>
                    <label htmlFor='upload'>Upload Link:<span className='opacity-40 text-sm'>{'(eg.Drive Link)'}</span></label>
                    <input required type='url' size={50} placeholder='drive.google.com/' className='w-full p-2 mt-1 mb-3 bg-superlightGray border-[1px] rounded-md text-sm focus-visible:outline-none' id='upload' name="deliveryLink" ></input>
                    <label htmlFor='message'>Message to the Customer: 😀<span className='opacity-40 text-sm'>{'(max. 250 words)'}</span></label>
                    <input type='text' maxLength={150} className='w-full p-2 mt-1 mb-3 bg-superlightGray border-[1px] rounded-md text-sm focus-visible:outline-none' id='upload' name="deliveryLink" ></input>
                </form>
                <button className="shadow-[3px_3px_0px_black] bg-lightGreen relative cursor-pointer px-4 h-10 font-medium rounded-md text-black">Deliver</button>
            </div>
        </Modal>
    ) : <></>
};

