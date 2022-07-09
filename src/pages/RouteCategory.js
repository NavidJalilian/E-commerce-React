import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategorySection from "../components/CategorySection";
import SkeletonLoading from "../components/SkeletonLoading";
import { useSelector } from "react-redux/es/exports";
import "./RouteCategory.css";

export default function RouteCategory() {
  const { category } = useParams();
  const isLoading = useSelector((state) => state.categories.isLoading);
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <div className="">
        <h2 className="route-category-title">{category}</h2>

        {isLoading && <SkeletonLoading />}
      </div>
      <div className="route-category-section">
        {products &&
          products.map((product) => (
            <CategorySection product={product} key={product.id} />
          ))}
      </div>
    </>
  );
}
