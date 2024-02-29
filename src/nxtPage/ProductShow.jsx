import React, { useState } from "react";

const ProductShow = () => {
  const [image, setImage] = useState(1);

  return (
    <>
      <div className=" container py-6">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="#" className="hover:underline hover:text-gray-600">
              Home
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a href="#" className="hover:underline hover:text-gray-600">
              Rotavator
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>Godzilla Rotavator</span>
          </div>
        </div>
        {/* ./ Breadcrumbs */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div>
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  {image === 1 && (
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <span className="text-5xl">1</span>
                    </div>
                  )}

                  {image === 2 && (
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <span className="text-5xl">2</span>
                    </div>
                  )}

                  {image === 3 && (
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <span className="text-5xl">3</span>
                    </div>
                  )}

                  {image === 4 && (
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <span className="text-5xl">4</span>
                    </div>
                  )}
                </div>

                <div className="flex -mx-2 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex-1 px-2">
                      <button
                        onClick={() => setImage(i)}
                        className={`focus:outline-none w-full rounded-lg h-24 md:h-30 bg-gray-100 flex items-center justify-center ${
                          image === i
                            ? "ring-2 ring-primary-300 ring-inset"
                            : ""
                        }`}
                      >
                        <span className="text-2xl">{i}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              {/* Rest of the code remains unchanged */}
              <div class="md:flex-1 px-4">
                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                </h2>
                <p class="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" class="text-primary-600 hover:underline">
                    Jai Gurudev Industries
                  </a>
                </p>

                <div class="flex items-center space-x-4 my-4">
                  <div>
                    <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span class="text-primary-400 mr-1 mt-1">₹</span>
                      <span class="font-bold text-primary-600 text-3xl">
                        10000
                      </span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                    <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                  </div>
                </div>

                <p class="text-gray-500">
                  Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                  Vitae exercitationem porro saepe ea harum corrupti vero id
                  laudantium enim, libero blanditiis expedita cupiditate a est.
                </p>

                <div class="flex py-4 space-x-4">
                  {/* <div class="relative">
                    <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                      Qty
                    </div>
                    <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>

                    <svg
                      class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </div> */}

                  <button
                    type="button"
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-primary-600 hover:bg-primary-500 text-white flex items-center"
                  >
                    Enquiry <span className="ml-2 text-2xl">→</span>
                  </button>
                  <button
                    type="button"
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-primary-600 hover:bg-primary-500 text-white flex items-center"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShow;
