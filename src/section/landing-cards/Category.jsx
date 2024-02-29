import React from "react";
import Card2 from "./Card2";

const Category = () => {
  return (
    <section className=" bg-blue-100 dark:bg-gray-900">
      <div className=" max-w-7xl mx-auto py-20 flex flex-col items-center justify-center">
        <div className="mb-2 text-center">
          <h1 className="max-w-2xl text-3xl text-gray-800 font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
            Explore by Category
          </h1>
        </div>
        <div className=" bg-primary-200 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
    </section>
  );
};

export default Category;

{
  /* is category m dkk h small size karne p right m shift ho jataa h contect margin check karna or padding v
   */
}
{
  /* <div className="flex flex-col items-center justify-center">
        <div className=" mb-4 text-center">
          <h1 className="max-w-2xl text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
            Explore by Category
          </h1>
        </div>
        <div className="flex flex-wrap mx-auto flex-grow justify-center items-center bg-white dark:bg-gray-900">
          <Card categoryName={"Rotavator"} />
          <Card categoryName={"Combine"} />
          <Card categoryName={"Tillage"} />
          <Card categoryName={"Seeder"} />
          <Card categoryName={"Harrow"} />
          <Card categoryName={"Cultivator"} />
        </div>
      </div> */
}
