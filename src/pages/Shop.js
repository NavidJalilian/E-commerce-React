import { Route, Routes } from "react-router-dom";
import CategoryPreview from "./CategoryPreview";
import RouteCategory from "./RouteCategory";
import { getCollectionAndDocuments } from "../utils/firebase";
import { useDispatch } from "react-redux/es/exports";
import { setCategories, setIsLoading } from "../store/categories/action";
import { useEffect } from "react";

export default function Shop() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setIsLoading(true));
      const categoriesMap = await getCollectionAndDocuments();
      dispatch(setCategories(categoriesMap));
      dispatch(setIsLoading(false));
    };
    fetchProducts();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<RouteCategory />} />
    </Routes>
  );
}
