import { useEffect, useState } from "react";

export const UseFetchData = (category, filters = {}) => {
  const [result, setResult] = useState([]);  
  const [error, setError] = useState(null);

  const categoriesMap = {
    womanfasion: [
      "beauty",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches"
    ],beauty:["beauty"],
    mensfasion: [
      "mens-shirts",
      "mens-shoes",
      "mens-watches"
    ],
    electronics: ["laptops", "mobile-accessories", "smartphones", "tablets"],
    smartphones:["smartphones"],tablets:["tablets"],
    homelifestyle: ["furniture", "groceries", "home-decoration", "kitchen-accessories"],
    groceries:["groceries"],
    furniture:["furniture"],
    medicin: ["skin-care", "sunglasses", "fragrances"],sunglasses:["sunglasses"],fragrances:["fragrances"],
    sports: ["tops", "sports-accessories"],
    baby: ["motorcycle", "vehicle"],
    health: ["beauty", "skin-care", "sunglasses", "fragrances"],
    computers: ["laptops", "desktops", "computer-accessories"], 
    phones: ["mobile-accessories", "smartphones", "tablets"],
    smartwatch: ["mens-watches", "womens-watches"],
    camera: ["camera"],
    gaming: ["sunglasses", "sports-accessories"],
    headphones: ["headphones"],
    laptops:['laptops'],
    "mobile-accessories": ["mobile-accessories"],
    // Add more categories here if needed
    "bestselling":["furniture", "groceries", "home-decoration", "kitchen-accessories"],
  };

  const applyFilters = (products) => {
    
    return products.filter(product => {
      if (filters.bestSelling && product.rating <= 4.5 && product.discountPercentage <= 30) {
        return false;
      }
      if (filters.highestRated && product.rating <= 4.5) {
        return false;
      }
      if (filters.maxPrice && product.price > filters.maxPrice) {
        return false;
      }
      // Add more filtering conditions here as needed
      return true;
    });
  };

  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(console.log);

    // fetch('https://dummyjson.com/products/category/music')
    // .then(res => res.json())
    // .then(console.log);
    const fetchData = async () => {
      if (categoriesMap[category]) {
        const localStorageKey = `products_${category}`;
        const localStorageData = localStorage.getItem(localStorageKey);

        if (localStorageData) {
          setResult(JSON.parse(localStorageData));
        } else {
          try {
            const results = await Promise.all(
              categoriesMap[category].map(subCat =>
                fetch(`https://dummyjson.com/products/category/${subCat}`)
                  .then(res => res.json())
              )
            );
            const combinedProducts = results.flatMap(result => result.products);
            const filteredProducts = applyFilters(combinedProducts);
            setResult(filteredProducts);
            localStorage.setItem(localStorageKey, JSON.stringify(filteredProducts));
          } catch (error) {
            setError('Error fetching data: ' + error.message);
            console.error('Error fetching data:', error);
          }
        }
      } else {
        setError('Category not found');
      }
    };

    fetchData();
  }, [category, filters]);

  return { result, error };
};
