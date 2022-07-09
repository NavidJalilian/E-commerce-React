import React from "react";
import Card from "../components/Card";
import "./Home.css";

const homeViewData = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "Shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "Shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "Shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "Shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "Shop/mens",
  },
];

export default function Home() {
  
  return (
    <>
      <div className="home">
        {}
        {homeViewData.map(({ id, title, imageUrl,route }) => (
          <Card url={imageUrl} title={title} key={id} route={route} />
        ))}
      </div>
    </>
  );
}
