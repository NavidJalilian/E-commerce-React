import { useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";
import "./Shop.css";
import Category from "../components/Category";
import SkeletonLoading from "../components/SkeletonLoading";

export default function CategoryPreview() {
  const { categoriesMap, isLoading } = useContext(CategoriesContext);

  return (
    <>
      {isLoading && <SkeletonLoading />}
      {Object.keys(categoriesMap).map((title) => {
        const item = categoriesMap[title];
        return <Category item={item} key={title} title={title} />;
      })}
    </>
  );
}
