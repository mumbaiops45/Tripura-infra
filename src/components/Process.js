import React from 'react'
import Image from "next/image";


const Process = ({ processSteps }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3  px-15 gap-x-10 gap-y-20 pb-6'>
            {processSteps.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="relative group [perspective:1000px]"
                    >
                        <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                            {/* FRONT */}
                            <div className="group mx-auto relative  flex items-center [backface-visibility:hidden]">

                                {/* CARD */}
                                <div className="w-full h-full bg-white rounded-md shadow-md hover:shadow-xl transition relative overflow-hidden px-10 py-5">

                                    {/* INDEX (half visible because of overflow-hidden on card) */}
                                    <div className='flex justify-center items-center'>
                                        <div className="w-12 h-12 flex justify-center items-center p-4 rounded-full bg-[var(--primary)] text-white text-lg font-bold z-20">
                                            {index + 1}
                                        </div>
                                    </div>


                                    {/* CONTENT */}
                                    <div className="relative z-20 mt-3">
                                        <h3 className="font-semibold text-lg mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* BACK */}
                            <div className="absolute  inset-0 rounded-2xl overflow-hidden shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <Image
                                    src={item.image || "/images/sample.jpg"}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                        </div>
                    </div>



                )
            })}
        </div>
    )
}

export default Process