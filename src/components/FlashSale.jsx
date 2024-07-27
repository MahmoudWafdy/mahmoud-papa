import CountdownTimer from "./CountdownTimer";
import FlashSaleSlider from "./FlashSaleSlider";

const FlashSale = () => {
  const targetDate = new Date(2024, 9, 2);

  return (
    <div className=" my-20">
      <div className="flex justify-start items-center gap-3 mb-3">
        <span className="w-5 h-10 bg-secondary inline-block rounded"></span>
        <span className="font-semibold text-secondary">Today's</span>
      </div>
      <div className="flex gap-8 md:gap-16 items-center">
        <div className="font-semibold text-xl md:text-4xl">Flash Sales</div>
        <CountdownTimer initialTime={targetDate} />
      </div>
      <FlashSaleSlider />
    </div>
  );
};
export default FlashSale;
