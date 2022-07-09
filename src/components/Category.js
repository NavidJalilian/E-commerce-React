import { Link } from "react-router-dom";
import CategorySection from "./CategorySection";

export default function Category({ title, item }) {
  return (
    <>
      <span className="section-title" href="">
        <Link to={"/Shop/" + title}>
          <span>{title}</span>
        </Link>{" "}
      </span>

      <div className="shop gallery box-shadow">
        {item
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <CategorySection product={product} key={product.id} />
          ))}
      </div>
    </>
  );
}
