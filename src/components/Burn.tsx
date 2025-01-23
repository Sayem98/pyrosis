import React from "react";

export const Burn = () => {
  return (
    <div>
      <div className="flex justify-center items-center  py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl">
          {/* Total Burned */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-lg text-center shadow-lg">
            <h1 className="text-white text-xl font-bold uppercase">
              Total Burned
            </h1>
            <p className="text-black text-2xl font-bold mt-2">4.79M PYRO</p>
          </div>

          {/* Total Burned Reward */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-lg text-center shadow-lg">
            <h1 className="text-white text-xl font-bold uppercase">
              Total Burned Reward
            </h1>
            <p className="text-black text-2xl font-bold mt-2">1.37221280 ETH</p>
          </div>

          {/* Your Balance */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-lg text-center shadow-lg">
            <h1 className="text-white text-xl font-bold uppercase">
              Your Balance
            </h1>
            <p className="text-black text-2xl font-bold mt-2">0 PYRO</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  py-10 px-6">
        {/* Input Box */}
        <div className="flex items-center justify-between  border border-pink-500 rounded-lg px-4 py-2 w-full md:w-1/2 text-white text-lg">
          <input
            type="number"
            placeholder="Enter amount"
            className="bg-transparent outline-none w-full text-white"
            value="10"
            readOnly
          />
          <button className="text-pink-500 font-bold ml-4">Max</button>
        </div>

        {/* Warning Message */}
        <div className="bg-orange-700 cursor-pointer text-black font-bold mt-6 px-6 py-3 w-full md:w-1/2 text-center rounded-lg">
          NOT ENOUGH BALANCE
        </div>
      </div>
    </div>
  );
};

export default Burn;
