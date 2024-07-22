const Address = () => {
  return (
    <div className="w-full h-full p-5 md:p-10 text-xs md:text-base">
      <h2 className="font-semibold text-secondary">Edit Your Address</h2>
      <form action="" className="grid grid-cols-2 gap-2 mt-3">
        <label htmlFor="fullname" className="col-span-2">
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          placeholder="Mohamed Ali"
          className="col-span-2  md:col-1 md:row-start-2 md:row-end-3 bg-gray-100 p-2 outline-none"
        ></input>
        <label htmlFor="mobile" className="col-span-2">
          Mobile
        </label>
        <input
          type="text"
          id="mobile"
          placeholder="+965 66554489"
          className="col-span-2 md:col-2 md:row-start-2 md:row-end-3 bg-gray-100 p-2 outline-none"
        ></input>

        <label htmlFor="area" className="col-span-2">
          Area
        </label>
        <input
          type="text"
          id="area"
          placeholder="hawally"
          className="col-span-2 md:col-1 md:row-start-4 md:row-end-5 bg-gray-100 p-2 outline-none"
        ></input>
        <label htmlFor="block" className="col-span-2">
          Block
        </label>
        <input
          type="text"
          id="block"
          placeholder="block 5"
          className="col-span-2 md:col-2 md:row-start-4 md:row-end-5 bg-gray-100 p-2 outline-none"
        ></input>
        <label htmlFor="address" className="col-span-2 md:col-4">
          Full Address
        </label>
        <input
          type="text"
          id="Address"
          placeholder="Kingston, 5236, United State,454 complex"
          className="md:col-span-4 bg-gray-100 p-2 outline-none"
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
export default Address;
