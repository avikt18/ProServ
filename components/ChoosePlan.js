import { useState } from 'react'
import plans from '../data/plans'
import PlanCard from './PlanCard'

export default function ChoosePlan(params) {
    const [selectedPlan, setSelectedPlan] = useState()
    const handleSelect = (PlanId) => {
        setSelectedPlan(PlanId)
    }
    return (
        <>
            <h1 className='font-semibold mx-auto text-3xl'>Choose a Plan</h1>

            {/* replace with original plans */}
            <div className="flex mt-4 w-full space-x-4">
                {plans.map(plan => <PlanCard key={plan.planId} plan={plan} handleSelect={handleSelect} />)}  {/* replace array with actual list of sellers */}
            </div>

            <div className="mt-4 space-y-2">
                <div>
                    <label htmlFor='instruction'>Special Instruction:<span className='opacity-40 text-sm'>{'(max. 250 words)'}</span></label>
                    <input type='text' maxLength={250} className='w-full p-2 mt-1 bg-superlightGray border-[1px] rounded-md text-sm focus-visible:outline-none' id='instruction' name="instruction" ></input>
                </div>
                <div>
                    <label htmlFor='instruction'>Deadline:</label>
                    <input required type='date' className='block p-2 mt-1 bg-superlightGray border-[1px] rounded-md text-sm focus-visible:outline-none' id='deadline' name="deadline" ></input>
                </div>
            </div>

            <div className="w-full left-0 flex justify-between items-center absolute bottom-0 border-t-[1px] border-black p-6 bg-superlightGray">
                {selectedPlan + 1 ? (
                    <h1 className='font-semibold text-lg'>{plans[selectedPlan].planName}</h1>
                ) : (
                    <h1 className='font-semibold text-lg opacity-60'>Select a Plan</h1>
                )
                }
                <button className="shadow-[3px_3px_0px_black] bg-lightGreen disabled:bg-lightGray disabled:opacity-60 disabled:cursor-not-allowed relative cursor-pointer px-4 h-10 font-medium rounded-md text-black" disabled={!(selectedPlan + 1)}>Buy</button>
            </div>
        </>
    )
};
