import { Link } from "react-router-dom";
import CategorySection from "./CategorySection";

export default function Category({ title, item }) {
  return (
    <>
      <h2 href="">
        <Link to={"/Shop/" + title}>
          <span className="section-title">{title}</span>
        </Link>{" "}
      </h2>

      <div className="shop gallery">
        {item
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <CategorySection product={product} key={product.id} />
          ))}
      </div>
    </>
  );
}
