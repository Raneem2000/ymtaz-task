const Loading = () => {
  const skelton = Array.from({ length: 3 });
  return (
    <>
      {skelton.map((_, index) => (
        <div
          key={index}
          className="bg-backGround mx-10 p-2 my-8 rounded shadow"
        >
          <div className="">
            <div className="flex justify-between items-center gap-1">
              <div className="flex flex-col gap-2 w-44">
                <span className="bg-gray h-4 w-24 rounded animate-pulse" />{" "}
                <span className="bg-gray h-4 w-16 rounded animate-pulse" />{" "}
              </div>
              <div className="flex flex-col gap-2 justify-end items-end">
                <span className="bg-gray h-4 w-20 rounded animate-pulse" />{" "}
                <span className="bg-gray h-4 w-32 rounded animate-pulse" />{" "}
              </div>
            </div>
            <button className="mt-4 p-2 rounded-xl bg-gray-200 w-full animate-pulse">
              &nbsp;
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Loading;
