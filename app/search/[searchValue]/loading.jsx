import {Skeleton} from "@Components/Reuseables/Skeleton";
import React from "react";
import { FiImage } from "react-icons/fi";

const loading = () => {
  return (
    <div className="w-full h-[90vh]">
      <div className=" pt-[15vh]">
        <div className="container text-center flex flex-col items-center">
          <div className="text-black loading">
            <p className="text-xl font-bold">
              <Skeleton />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
