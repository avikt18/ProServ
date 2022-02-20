import SellerWork from "./SellerWork"
import ChoosePlan from "./ChoosePlan"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import OrdersList from "./OrdersList"

export default function RightCardContentSellerPOV() {
    //if the seller is seeing his own profile
    const [isActive, setIsActive] = useState([true, false, false])
    const [tilePos, setTilePos] = useState(0)
    const navContent = ['Orders', 'Work', 'Plans']

    const handleClick = (id) => {
        const temp = Array(3).fill(false)
        temp[id] = true
        setIsActive(temp)
        const calculatedTilePosition = id * 96
        setTilePos(calculatedTilePosition)
    }

    return (
        <>
            {/* Content Selector ⬇ */}
            <div className="w-72 relative bg-superlightGray flex mx-auto mb-2 rounded-md overflow-hidden cursor-pointer">
                <div className="absolute bottom-0 h-1 w-full bg-darkGray opacity-30" />
                {navContent.map((content, id) => {
                    return (
                        <div key={content} onClick={() => handleClick(id)} className={`${isActive[id] ? 'opacity-100 scale-105' : 'opacity-50 scale-90 hover:opacity-70'} transition-all py-2 relative flex flex-1 items-center justify-center`}>
                            <h1 className="select-none">My {content}</h1>
                        </div>
                    )
                })}
                <motion.div initial={{x: 0}} animate={{x: tilePos}} className='absolute bottom-0 h-1 w-24 bg-lightGreen' />
            </div>
            {/* Content Selector ⬆ */}

            {isActive.map((selectedView, id) => {
                if(selectedView ){
                    if(id===0) return <OrdersList key={id}/>
                    if(id===1) return <SellerWork key={id}/>
                    if(id===2) return <ChoosePlan key={id}/>
                }
            } )}
        </>
    )
};
