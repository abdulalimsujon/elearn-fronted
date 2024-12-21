import React from "react";

const Anouncements = () => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Anouncements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="rounded-md p-4 bg-e_sky">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet , ad.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            voluptatem nulla cupiditate doloremque aliquam quia, dicta ex magnam
            eius?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="rounded-md p-4 bg-e_purple">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet , ad.</h2>
            <span className="text-xs text-gray-400 bg-e_skyLight rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            voluptatem nulla cupiditate doloremque aliquam quia, dicta ex magnam
            eius?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="rounded-md p-4 bg-e_yellowLight">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet , ad.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            voluptatem nulla cupiditate doloremque aliquam quia, dicta ex magnam
            eius?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anouncements;
