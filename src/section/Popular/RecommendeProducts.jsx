import React from 'react'

const RecommendeProducts = () => {
  return (
    <div><div>
    {/* <!-- component --> */}
    <div className="flex flex-col bg-orange-100 m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-extrabold text-4xl text-gray-900">
        Recommended Products
      </h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
        </div>
      </div>
    </div>
    <style>
      {`
      .hide-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .hide-scroll-bar::-webkit-scrollbar {
        display: none;
      }
    `}
    </style>
  </div></div>
  )
}

export default RecommendeProducts