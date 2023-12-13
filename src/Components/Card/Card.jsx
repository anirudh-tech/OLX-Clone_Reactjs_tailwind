import React from "react";
import { BiHeart } from "react-icons/bi";
import { HiLightningBolt } from "react-icons/hi";

function Card({ data, isFeatured }) {
    return (
        <div className="lg:w-1/4 pr-5 mb-3 relative">
            <div className="border border-gray-200 bg-white rounded ">
                <div className="h-52 overflow-hidden p-3">
                    <img src={data.image} alt="asdfa" className="mx-auto" />
                </div>
                <div className={`p-3 ${isFeatured && "border-yellow-300 border-l-4"}`}>
                    <h2 className="font-bold text-xl">₹ {data.price}</h2>
                    <h3 className="whitespace-nowrap overflow-hidden text-ellipsis">
                        {data.title}
                    </h3>
                    {/* <h3>{data.category}</h3> */}
                    <p className="text-sm text-gray-500  whitespace-nowrap overflow-hidden text-ellipsis">
                        {data.description}
                    </p>
                </div>
                <div className="bg-white w-fit p-2 rounded-full absolute top-3 right-8 shadow-md ">
                    <BiHeart className="text-2xl" />
                </div>
                {isFeatured && (
                    <div className="absolute top-3 left-2 flex items-center bg-yellow-300 text-sm w-fit rounded px-2 gap-1">
                        <HiLightningBolt />
                        Featured
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;