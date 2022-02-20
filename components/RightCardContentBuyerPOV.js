import SellerWork from "./SellerWork"
import ChoosePlan from "./ChoosePlan"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function RightCardContentBuyerPOV() {
    const [showPlanPage, setShowPlanPage] = useState(false)
    const router = useRouter()
    const {query} = router

    useEffect(() => {
        if (query.choosePlan) {
            setShowPlanPage(true)
        } else {
            setShowPlanPage(false)
        }
    }, [query])

    console.log(showPlanPage)
    return showPlanPage ? <ChoosePlan /> : <SellerWork />
   
};
