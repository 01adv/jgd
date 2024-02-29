import React from "react";
import dealer2 from '../../assets/dealer3.jpg'

const BeDealer = () => {
  return (
    <div>
      <section class=" pb-8 md:pb-20">
        <div class="mx-auto max-w-7xl relative">
          <div class="shadow md:rounded-lg">
            <div class="grid overflow-hidden text-gray-700 shadow-xl md:grid-cols-2 bg-gradient-to-r from-primary-300 to-blue-500">
              <aside class="p-8 space-y-4 md:p-16">
                <h2 class="text-2xl font-extrabold tracking-tight md:text-4xl font-headline">
                  Ready to Join us ? Start your Journey with us today.
                </h2>

                <p class="text-white md:text-xl">
                  Embark on a fruitful partnership with Jai Gurudev Industries,
                  a leading agricultural machinery company. Join us as a dealer
                  and grow together, bringing innovative farming solutions to
                  every field
                </p>

                <div>
                  <a
                    href=""
                    class="bg-primary-500 hover:bg-primary-600 hover:shadow-lg hover:border-2 text-white font-bold px-4 py-2 mt-3 rounded-lg"
                  >
                    Become a Dealer
                  </a>
                </div>
              </aside>
              
              <aside class="relative hidden md:block">
                <img
                  class="absolute inset-0 object-cover object-left-top w-full h-full rounded-tl-lg"
                  src={dealer2}
                  alt="Discover our beautiful panel"
                />
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeDealer;
