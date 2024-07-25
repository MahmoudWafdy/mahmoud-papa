import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [isOpenSearchResult, setISOpenSearchResult] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    if (searchTerm.length > 3) {
      fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((products) => setSearchResults(products.products));
    } else {
      setSearchResults([]);
    }
  };
  useEffect(() => {
    if (searchResults.length > 0) {
      setISOpenSearchResult(true);
    } else {
      setISOpenSearchResult(false);
    }
  }, [searchResults]);
  return (
    <form className="relative flex min-w-10 min-h-8 w-full items-center px-3  justify-end gap-2 rounded-full bg-gray-50 shadow md:w-[200px]">
      {isOpenSearchResult && (
        <div
          className="absolute top-[120%] left-0 w-[200%] min-h-20 bg-gray-50 shadow-md z-50 flex flex-col justify-center
         items-center rounded"
        >
          {searchResults.map((product) => (
            <Link
              to={`/${product.category}/${product.title}`}
              state={{
                product: {
                  images: product.images,
                  title: product.title,
                  discountPercentage: product.discountPercentage,
                  price: product.price,
                  review: product.review,
                  category: product.category,
                  description: product.description,
                  stock: product.stock,
                },
              }}
              key={product.id}
              className="w-full py-2 px-4 hover:bg-gray-100"
            >
              {product.title}
            </Link>
          ))}
        </div>
      )}
      <input
        className="h-full w-full max-w-md rounded-full outline-none placeholder:text-xs bg-transparent"
        type="text"
        name="search"
        placeholder="What are you looking for?"
        value={search}
        onChange={handleSearchInputChange}
      />
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="search">
          <path
            id="Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="#374151"
          />
        </g>
      </svg>
    </form>
  );
};
export default SearchInput;
