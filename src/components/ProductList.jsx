import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className="flex gap-2 md:gap-4 justify-center flex-wrap my-20">
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
