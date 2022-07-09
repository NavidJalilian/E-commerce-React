import "./Shop.css";
import Category from "../components/Category";
import SkeletonLoading from "../components/SkeletonLoading";
import "./CategoryPreview.css";
import { useSelector } from "react-redux/es/exports";

export default function CategoryPreview() {
  const isLoading = useSelector((state) => state.categories.isLoading);
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  return (
    <>
      {isLoading && <SkeletonLoading />}

      {Object.keys(categoriesMap).map((title) => {
        const item = categoriesMap[title];

        return (
          <div className="category-preview" key={title}>
            <Category item={item} title={title} />
          </div>
        );
      })}
    </>
  );
}
