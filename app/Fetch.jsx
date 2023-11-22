"use client";
import React from "react";
import {
  useGetAllProductsQuery,
  //   useGetSearchedProductQuery,
} from "./redux/Slices/apiSlice";
const Fetch = () => {
  const {
    data,
    // : allProductsData,
    isError,
    isLoading,
  } = useGetAllProductsQuery();
  //   const { data: searchProductData } = useGetSearchedProductQuery("samsung");
  //   console.log(searchProductData);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      ) : (
        <div className="flex justify-center items-center p-[3%]">
          <div className="grid grid-cols-3 gap-5 ">
            {data?.products?.map((d) => (
              <div key={d.id}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg max-h-[250px] min-h-[250px] w-full"
                      src={`${d?.thumbnail}`}
                      alt={d?.category}
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        Title : {d?.title}
                      </h5>
                    </a>
                    <a href="#">
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        Brand : {d?.brand}
                      </h5>
                    </a>
                    <a href="#">
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        Category : {d?.category}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {d?.description.slice(0, 35)}...
                    </p>
                    <p className="mb-3 font-normal text-yellow-400 ">
                      Rating: {d?.rating}
                    </p>

                    <div className="flex justify-between gap-2 items-center">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-700 "
                      >
                        Stock : {d?.stock}
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Price : $ {d?.price}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Fetch;
