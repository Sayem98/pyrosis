export const Header = () => {
  return (
    <div className="w-full flex md:justify-between gap-22 md:gap-0 items-center p-4">
      <img
        src="images/logo.png"
        alt="logo"
        className="w-20 h-20 md:w-40 md:h-40 rounded-full"
      />
      {/* <button className="bg-[#ecbf6c] hover:bg-[#b002c5] h-[50px] md:h-[80px] cursor-pointer text-white font-bold py-2 px-4 rounded">
        CONNECT WALLET
      </button> */}
      <appkit-button />
    </div>
  );
};
