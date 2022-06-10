import { useNavigate } from "react-router-dom";
import "./Card.css";
export default function Card({ title, url, route }) {
  const navigate = useNavigate();
  const navigationHandler = () => navigate(route);
  return (
    <div className="card" onClick={navigationHandler}>
      <img src={url} alt={title} />
      <div className="card-heading">
        <h3>{title}</h3>
        <p>shop now</p>
      </div>
    </div>
  );
}
