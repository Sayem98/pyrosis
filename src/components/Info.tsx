export const Info = () => {
  return (
    <div className="flex flex-col justify-between md:max-w-6xl px-6 md:px-20 py-10 md:py-20 text-xl md:text-2xl text-center space-y-8">
      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 p-4">
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-lg md:text-xl">Token Name</h1>
          <p className="text-gray-600">DPyrosis ($Pyro)</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-lg md:text-xl">Token Price</h1>
          <p className="text-gray-600">$0.0001</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-lg md:text-xl">Total Supply</h1>
          <p className="text-gray-600">100,000,000</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-lg md:text-xl">Market Cap</h1>
          <p className="text-gray-600">$6.36K</p>
        </div>
      </div>

      {/* Second Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 p-4">
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-lg md:text-xl">Holders</h1>
          <p className="text-gray-600">84</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-lg md:text-xl">24H Volume</h1>
          <p className="text-gray-600">$23.26</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-lg md:text-xl">24H Price Change</h1>
          <p className="text-gray-600">-3.25%</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-lg md:text-xl">Liquidity</h1>
          <p className="text-gray-600">$7.96K</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
