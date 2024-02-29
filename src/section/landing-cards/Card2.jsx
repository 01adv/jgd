import React from "react";
import tractor from '../../assets/tractor.svg';
import combine from '../../assets/combine.jpeg';

const Card2 = () => {
  return (
    <div class="relative bg-white max-w-sm rounded-md mx-4 mt-8 shadow-lg md:transition-all ease-in-out duration-900 hover:scale-110 hover:text-orange-400">
    <img class="h-70 w-full object-cover rounded-md" src={tractor} alt="Random image"/>
    <div class="absolute inset-2 bg-black opacity-30 rounded-md ">  
    </div>
    <div class="absolute inset-0 flex items-center justify-center">
        <h2 class=" text-white text-3xl font-bold ">Rotavator</h2>
    </div>
</div>
  );
};

export default Card2;