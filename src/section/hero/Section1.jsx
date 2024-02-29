import React from "react";
import combine from "../../assets/combine.gif";
import "../../css/hero.css";
const Section1 = () => {
  return (
    <section class=" lg:min-h-[100vh] bg-gradient-to-r from-orange-100 to-green-50 dark:bg-gray-900">
      {/* <div className="hero h-screen flex items-center justify-center"> */}
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
          <div class="m-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl pb-5 text-4xl font-bold tracking-tight from-red-600 via-orange-400 to-green-500 bg-gradient-to-b bg-clip-text text-transparent leading-none md:text-5xl xl:text-6xl dark:text-white">
            Revolutionizing Agriculture with Cutting-Edge Solutions
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">At Jai Gurudev Industries, we are at the forefront of innovation, harnessing the power of technology to transform the agriculture landscape. From state-of-the-art machinery to sustainable solutions, we empower farmers to cultivate the future. Join us on the journey towards a more efficient, sustainable, and bountiful harvest. Discover the next era of agriculture with us - where innovation meets cultivation.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
            >
              Explore
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex shadow-lg shadow-amber-800">
            <img src={combine} alt="mockup" />
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Section1;
