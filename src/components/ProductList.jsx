import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:grid-cols-5 my-20">
      {data &&
        data.map((product) => (
          <ProductCard
            key={product.id}
            // Use a unique key like product.id
            title={product.title}
            images={product.images}
            price={product.price}
            discountPercentage={product.discountPercentage}
            review={product.reviews.length}
            category={product.category}
            stock={product.stock}
            description={product.description}
          />
        ))}
    </div>
  );
};

export default ProductList;
