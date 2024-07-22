const MyReturns = () => {
  const MyRetunList = [
    {
      id: "1",
      title: "Asus Zenbook Pro Dual Screen Laptop",
      images:
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
      price: "555",
    },
  ];
  return (
    <div className=" my-2">
      <div className="flex flex-col gap-3 my-10 ">
        <div className="sm-md:px-8">
          <div className="cart_product">
            <ul className="flex justify-between shadow py-3 ">
              <li className="w-24 sm-md:w-24">Product</li>
              <li className="w-14">Price</li>
              <li className="w-14">Quantity</li>
              <li className="w-14">Subtotal</li>
            </ul>
            {MyRetunList.length === 0 ? (
              <div className="flex justify-center font-semibold text-secondary w-full h-7 col-span-3 my-10 ">
                <span>There is no product</span>
              </div>
            ) : (
              MyRetunList.map((product) => (
                <div
                  className="relative group hover:bg-gray-100 transition-colors duration-200
                 flex justify-between items-center shadow py-4 text-xs sm-md:text-sm"
                  key={product.id}
                >
                  <div className="  flex  flex-col w-24 sm-md:flex-row items-center sm-md:w-36  ">
                    <img
                      src={product.images}
                      alt={product.title}
                      className="w-10 object-cover mb-1 md:mr-1"
                    />
                    <h2>{product.title}</h2>
                  </div>
                  <p className="w-14">{product.price}$</p>
                  <p className="w-10">1 </p>

                  <p className="price w-14">{product.price}$</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyReturns;
