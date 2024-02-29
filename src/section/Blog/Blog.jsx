import React from "react";
import img1 from '../../assets/blog1.jpg'
import img2 from '../../assets/blog2.jpg'
import img3 from '../../assets/blog3.jpg'

const Blog = () => {
  return (
    <div>
      {/* <!-- component --> */}
      <div class="flex justify-center items-center">
        {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div role="main" class="flex flex-col items-center justify-center">
            <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
              News & Blogs
            </h1>
            <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              If you're looking for random paragraphs, you've come to the right
              place. When a random word or a random sentence isn't quite enough
            </p>
          </div>
          <div class="lg:flex items-stretch md:mt-12 mt-8">
            <div class="lg:w-1/2">
              <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div class="sm:w-1/2 relative">
                  <div>
                    <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p>
                    <div class="absolute bottom-0 left-0 p-6">
                      <h2 class="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p class="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p class="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          class="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i0.wp.com/blog.bijak.in/wp-content/uploads/2022/07/Agritech-The-future-of-Indian-Agriculture.jpg?fit=940%2C532&ssl=1"
                    // src={img1}
                    class="w-full"
                    alt="chair"
                  />
                </div>
                <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p>
                    <div class="absolute bottom-0 left-0 p-6">
                      <h2 class="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p class="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p class="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          class="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    // src="https://i.ibb.co/3C5HvxC/img-2.png"
                    src={img2}
                    class="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
              <div class="relative">
                <div>
                  <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div class="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 class="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  // src="https://i.ibb.co/Ms4qyXp/img-3.png"
                  src={img3}
                  alt="sitting place"
                  class="w-full mt-8 md:mt-6 hidden sm:block"
                />
                <img
                  class="w-full mt-4 sm:hidden"
                  // src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                  src={img1}
                  alt="sitting place"
                />
              </div>
            </div>
            <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div class="relative">
                <div>
                  <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div class="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 class="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p class="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  // src="https://i.ibb.co/6Wfjf2w/img-4.png"
                  src={img1}
                  alt="sitting place"
                  class="w-full sm:block hidden"
                />
                <img
                  class="w-full sm:hidden"
                  src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
              <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div class="relative w-full">
                  <div>
                    <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p>
                    <div class="absolute bottom-0 left-0 p-6">
                      <h2 class="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p class="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p class="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          class="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/3yvZBpm/img-5.png"
                    class="w-full"
                    alt="chair"
                  />
                </div>
                <div class="relative w-full sm:mt-0 mt-4">
                  <div>
                    <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p>
                    <div class="absolute bottom-0 left-0 p-6">
                      <h2 class="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p class="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p class="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          class="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/gDdnJb5/img-6.png"
                    class="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
