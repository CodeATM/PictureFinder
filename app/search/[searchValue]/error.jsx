"use client"; // Error components must be Client Components

import { useEffect } from "react";
// import SearchBox from "@Components/SearchBox";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-[90vh]">
      <div className=" pt-[15vh]">
        <div className="container text-center flex flex-col items-center">
          <h2 className="text-[10rem] tracking-widest font-bold">404</h2>

          <h2 className="text-xl font-semibold text-gray-800">
            Dont worry you didn't break anything, we just couldn't get what you
            are looking for
          </h2>

          <div className="mt-4 flex flex-col space-y-4 mb-8 relative">
            <p className="text-xl  tracking-wide text-gray-600">
              Please try another search term
            </p>
            <div className="relative">{/* <SearchBox /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
