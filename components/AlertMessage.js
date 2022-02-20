import { motion, AnimatePresence } from 'framer-motion'

export default function     AlertMessage({ message, messageStatus }) {
    const variants = {
        open: {
            opacity: 1,
            // y: 0,
            transition: { duration: 0.3 }
        },
        closed: {
            opacity: 0,
            // y: 10,
        }
    }

    return (
        <AnimatePresence>
            {messageStatus && (
                <motion.div key='alertMessage' variants={variants} initial="closed" animate="open" exit="closed" className={`z-40 fixed bottom-6 left-1/2 -translate-x-1/2 font-secondary shadow-lg text-gray-100`}>
                    <motion.p className='px-3 py-2 bg-[#2C2C2C] rounded-[4px]' initial={{y: 20}} animate={{y: 0}}>{message}</motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
};
