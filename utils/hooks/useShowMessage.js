import { useState } from "react"

export default function useShowMessage() {
    const [displayMessage, setDisplayMessage] = useState(false)
    const messageDisplayTime = 2000
    var timer 
    
    if(displayMessage) {
        clearTimeout(timer)
        timer = setTimeout(() => setDisplayMessage(false), messageDisplayTime)
    }

    return [displayMessage, () => setDisplayMessage(true)]
};
