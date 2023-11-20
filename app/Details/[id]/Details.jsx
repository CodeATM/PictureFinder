import React from 'react'
import {IoMdShareAlt, IoIosMore} from 'react-icons/io'
import {AiFillInfoCircle} from 'react-icons/ai'
import {FiCalendar, FiCheck} from 'react-icons/fi'


const Details = ({Detail}) => {
  return (
    <div className="mt-8">
        <div className=" space-y-5">
            <div className="flex justify-between items-start flex-col md:flex-row">
                <div className="flex space-x-8 items-center">
                    <div className="space-y-[2px]">
                        <h3 className="text-gray-400 text-sm">Views</h3>
                        <p className="text-black font-semibold">{Detail.views}</p>
                    </div>
                    <div className="space-y-[2px]">
                        <h3 className="text-gray-400 text-sm">Download</h3>
                        <p className="text-black font-semibold">{Detail.downloads}</p>
                    </div>
                    <div className="space-y-[2px]">
                        <h3 className="text-gray-400 text-sm">Featuerd in</h3>
                        <p className="text-black font-semibold">Editorial</p>
                    </div>
                </div>

                <div className="flex space-x-3 mt-3 md:mt-0">
                    <button className="border-[1px] rounded-md py-[2px] px-2 border-gray-400 flex space-x-1 text-gray-400 items-center font-semibold"><IoMdShareAlt/> <span className="">Share</span></button>
                    <button className="border-[1px] rounded-md py-[2px] px-2 border-gray-400 flex space-x-1 text-gray-400 items-center font-semibold"><AiFillInfoCircle/> <span className="">Info</span></button>
                    <button className="border-[1px] rounded-md py-[2px] px-2 border-gray-400 flex space-x-1 text-gray-400 items-center font-semibold"><IoIosMore/></button>
                </div>
            </div>

            <div className="space-y-1">
                <p className="text-gray-600 tracking-wide flex items-center space-x-[4px] text-sm font-semibold">
                    <FiCalendar/> <span className="">Published {Detail.created_at.split()}</span>
                </p>
                <p className="text-gray-600 tracking-wide flex items-center space-x-[4px] text-sm font-semibold">
                    <FiCheck/> <span className="">Free to use for all user.</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Details