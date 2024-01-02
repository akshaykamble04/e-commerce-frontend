import React from "react";

const HomeSectionCard = () => {

    return (
        <div className="cursor-pointer flex flex-col 
        items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">


            <div className="h-[13rem] w-[10rem]">
                <img className="object-cover object-top w-full h-full" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRx65nXgsUckB6S_kSOoqOYuh9qHIKOu28N0pQPffm27QDwzxpBYeEg775lIWgutDmdyyxBJJbijX4sLTMEmBFfqARhVcfu597joH8tx5Y2jvky3zj1FEOW&usqp=CAc"
                    alt="" />

            </div>
            <div className="p-4">
                <h3 className='text-lg font-medium text-gray-900'>Dark Blue Wave Print Kurta</h3>
                <p className="mt-2 text-sm text-grat-500">The printed blue casual kurta is a splendid choice for a day-out or an evening planned with friends.</p>

            </div>
        </div>
    )

}

export default HomeSectionCard;

