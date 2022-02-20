import { Modal } from "@mui/material"
import Button from "./Button"

export default function BecomeSellerModal({ isOpen, setIsModalOpen }) {
    return isOpen ? (
        <Modal open={isOpen} onClose={() => setIsModalOpen(false)}>
            <div className="bg-white relative flex flex-col justify-center items-center absolute-center opacity-100 border-[1px] w-full sm:max-w-md h-32 border-black bg-sup rounded-2xl shadow-[4px_4px_0px_#000] ">
                <h2 className='font-medium mb-3 text-xl'>Create a new account as Seller </h2>
                <Button href="/signup" style="bg-black px-5 py-2 font-medium rounded-md text-white">Sign Up</Button>
            </div>
        </Modal>
    ) : <></>
};
