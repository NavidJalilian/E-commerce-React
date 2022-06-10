import { Route, Routes } from "react-router-dom";
import CategoryPreview from "./CategoryPreview";
import RouteCategory from "./RouteCategory";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<RouteCategory />} />
    </Routes>
  );
}
