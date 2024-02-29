import React from "react";
import Slider from "../../components/carousel/Slider";

const Testimonials = () => {
  return (
    <section className="overflow-hidden bg-white py-8 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col items-center max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:flex-row lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-5xl pt-10 font-extrabold leading-7 text-start text-gray-600">
                Testimonials
              </h2>
              <p className="mt-8 text-3xl text-center font-bold tracking-tight text-primary-400 sm:text-4xl">
                What our Clients say
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We've built an API that allows you to scale your podcast
                production workflow.
              </p>

              <div className="sm:mt-10 mt-6 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  See all reviews <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <Slider/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
