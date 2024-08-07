// src/components/SkeletonLoader.js

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:grid-cols-5 my-20">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="w-full border-solid p-2">
          <div
            className="flex justify-center items-center relative bg-gray-200 animate-pulse"
            style={{ paddingTop: "100%" }}
          ></div>

          <div className="flex flex-col gap-2 mt-3">
            <h2 className="h-4 bg-gray-200 animate-pulse rounded"></h2>
            <p className="h-4 bg-gray-200 animate-pulse rounded mt-1"></p>
            <div className="h-4 bg-gray-200 animate-pulse rounded mt-1"></div>
            <div className="flex gap-2 mt-1">
              <div className="h-4 w-1/4 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
