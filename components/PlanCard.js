export default function PlanCard({plan : {planId, planName, planDetails, planPrice}, handleSelect}) {
    return (
        <div onClick={() => handleSelect(planId)} className="cursor-pointer hover:shadow-md min-h-[200px] flex flex-col items-center py-2 px-2 pb-12 relative z-40 border-[1px] rounded-xl transition-colors duration-700 border-lightGray hover:border-lightGreen">
            <h1 className="mb-1 font-semibold text-xl">{planName}</h1>
            <ul className="space-y-1">
                {planDetails.map((detail, id) => {
                    return <li key={id} className="text-xs font-light opacity-70"> <span>-</span> {detail}</li>
                })}
            </ul>
            <h1 className="absolute bottom-2 font-secondary font-semibold text-3xl">₹{planPrice}</h1>
        </div>
    )
};
