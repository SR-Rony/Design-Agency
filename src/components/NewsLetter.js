import React from "react";

const NewsLetter = () => {
    return (
        <div className="flex justify-center items-center text-center pt-[90px] pb-[135px]">
            <div className="w-[596px]">
                <h5 className="font-medium text-xl text-btnColor">SUBSCRIBE</h5>
                <h4 className="font-semibold text-3xl px-24 capitalize pt-6 pb-1.5">
                    Subscribe to get the latest news about us
                </h4>
                <p className="font-normal text-base text-[#8B8B8B] pb-9">
                    Please drop your email below to get daily updates about what we do
                </p>
                <div className="relative">
                    <input
                        className="w-full border p-4 rounded-lg border-black"
                        type="text"
                        placeholder="Enter Your Email Address"
                    />
                    <button className=" py-2.5 top-1.5  right-2 rounded-lg absolute px-6 text-white bg-orange-600">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
