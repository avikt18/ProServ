import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DropDown({list, title , handleSelect, style}) {
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const handleDropDown = (e) => {
        e.stopPropagation()
        setDropDownOpen(!dropDownOpen)
    }

    useEffect(() => {
        if (dropDownOpen) {
            window.addEventListener('click', () => setDropDownOpen(!dropDownOpen))
        }
        return () => window.removeEventListener('click', () => setDropDownOpen(!dropDownOpen))
    }, [dropDownOpen])

    return (
        <div className={`${style} cursor-pointer relative flex items-center justify-between`} onClick={handleDropDown}>
            <p className="">{title}</p>
            <motion.img src='/down-arrow.svg' alt='arrow' className='h-2 mt-[2px] ml-3' />
            {dropDownOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-14 left-0 z-20 max-h-48 w-full rounded-xl py-1 shadow-md bg-white overflow-y-auto">
                {list.map(({ name }) => (
                    <p key={name} className='hover:bg-superlightGray rounded-md py-2 px-3' onClick={() => handleSelect(name)}>{name}</p>
                ))}
            </motion.div>}
        </div>
    )
};
