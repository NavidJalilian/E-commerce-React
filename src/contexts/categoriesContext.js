import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
  isLoading: false,
  setIsLoading: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const value = { categoriesMap, isLoading, setIsLoading };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const categoriesMap = await getCollectionAndDocuments();
      setCategoriesMap(categoriesMap);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
