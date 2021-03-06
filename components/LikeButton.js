import { useState } from "react"
import AlertMessage from "./AlertMessage"
import useShowMessage from "../utils/hooks/useShowMessage"


export default function LikeButton({style, fillColor}) {
    const [liked, setLiked] = useState(false)
    const [messageStatus, showMessage] = useShowMessage()

    const handleLike = (e) => {
        e.stopPropagation()
        setLiked(!liked)
        showMessage()
    }

    return (
        <>
            <div className={`${style} cursor-pointer`} onClick={handleLike}>
                <svg width="22" height="22" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.65662 1.48874L7.00026 1.81398L7.34395 1.48879C8.01734 0.851645 8.89584 0.500214 9.80501 0.5C10.2863 0.500412 10.7631 0.598695 11.2081 0.789595C11.6533 0.980542 12.0584 1.26058 12.3997 1.61435L12.4001 1.61478C13.8669 3.13159 13.8656 5.49294 12.4023 6.99903L7.19761 12.3561L7.17012 12.3844L7.1474 12.4167C7.12821 12.4439 7.10404 12.4648 7.07773 12.4788C7.05222 12.4924 7.02487 12.4994 6.99764 12.5C6.91414 12.4991 6.8537 12.4569 6.82379 12.4028L6.79141 12.3442L6.74475 12.2961L1.59829 6.99903L1.59822 6.99896C0.134796 5.49334 0.133258 3.13138 1.59762 1.61775L1.59834 1.617C1.93984 1.26255 2.34529 0.981908 2.79095 0.790501C3.23648 0.599146 3.71384 0.500555 4.1957 0.5C5.10483 0.500098 5.98333 0.851528 6.65662 1.48874Z"
                        fill={liked ? '#eb3d58' : 'white'}
                        stroke={liked ? 'none' : 'black'}
                    />
                </svg>
            </div>
            {liked ? (
                <AlertMessage message='Liked' messageStatus={messageStatus} />
            ) : (
                <AlertMessage message='Removed from Liked' messageStatus={messageStatus} />
            )}
        </>
    )
}