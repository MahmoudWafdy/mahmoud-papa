const PaymentOptions = () => {
  // محتاجين شغل لسه فيها
  return (
    <div className="w-full h-full p-5 md:p-10 text-xs md:text-base">
      <h2 className="font-semibold text-secondary">Edit Your Payments</h2>
      <form action="" className="grid grid-cols-2 gap-2 mt-3">
        <label htmlFor="fullname" className="col-span-2 ">
          Card Number
        </label>
        <input
          type="text"
          id="fullname"
          placeholder="xxxx xxxx xxxx xxxx"
          className="col-span-2  md:col-1 md:row-start-2 md:row-end-3 bg-gray-100 p-2 outline-none"
        ></input>
        <label htmlFor="ccv" className="col-span-2">
          CCV
        </label>
        <input
          type="text"
          id="ccv"
          placeholder="CCV"
          className="col-span-2 md:col-2 md:row-start-2 md:row-end-3 bg-gray-100 p-2 outline-none"
        ></input>

        <label htmlFor="name" className="col-span-2">
          Name On Card
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name on Card"
          className="col-span-2 md:col-1 md:row-start-4 md:row-end-5 bg-gray-100 p-2 outline-none"
        ></input>
        <label htmlFor="expiry" className="col-span-2">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          placeholder="Expiry Date"
          className="col-span-2 md:col-2 md:row-start-4 md:row-end-5 bg-gray-100 p-2 outline-none"
        ></input>

        <div className="col-span-2 md:col-span-4 flex justify-end gap-1 mt-3">
          <button className="font-medium h-10 w-32 rounded hover:bg-secondary hover:text-white transition-all duration-300 ">
            Cancel
          </button>
          <button className="font-medium h-10 w-32 bg-secondary rounded text-white hover:bg-white hover:text-black transition-all duration-300 ">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
export default PaymentOptions;
