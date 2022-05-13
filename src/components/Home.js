import React, { useEffect, useState } from "react";
import Banner from "../images/Group 39.png";
import Logo from "../images/logo 1.png";
import ReactPlayer from "react-player";

import "./../css/Home.css";
import Card from "./Card";
import FaqCard from "./FaqCard";
import ReadCard from "./ReadCard";
import TopicsCard from "./TopicsCard";

const data = [
  {
    id: "1",
    title:
      "Velit venenatis pretium mattis consectetur massa pretium mattis title 1",
    content:
      "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada. 1",
  },
  {
    title:
      "Velit venenatis pretium mattis consectetur massa pretium mattis title 2",
    content:
      "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada. 2",
  },
];
const Home = () => {
  const [categories, setCategories] = useState([]);
  const getItems = async () => {
    const response = await fetch(
      "https://mocki.io/v1/1965f83a-af57-42e5-ac86-f77185be7157"
    );
    setCategories(await response.json());
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="home">
      <img src={Banner} alt="banner" className="banner" />
      <div className="heading_outer">how it works</div>
      <div className="heading_inner">
        Sea Basket delivers fresh sourced seafood in a few easy clicks
      </div>
      <div className="categories" id="categories">
        <h1>categories</h1>
        <div className="wrapper">
          {categories.map((item) => {
            return <Card title={item.category} key={item.id} />;
          })}
        </div>
      </div>
      <div className="component_3">
        <div className="heading_outer">A GLANCE AT OUR PRODUCT</div>
        <div className="player-wrapper">
         
          <iframe className="video-player"
          width="80%" height="400px" src="https://www.youtube.com/embed/JtGcVFlEEw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
        </div>
      </div>
      <div className="faqs" id="faq">
        <div className="heading_outer">faqs</div>

        <FaqCard />
      </div>
      <div className="read">
        <div className="heading_outer">Have a read</div>
        <ReadCard title={data[0].title} content={data[0].content} />
        <ReadCard title={data[1].title} content={data[1].content} />
        <ReadCard title={data[1].title} content={data[1].content} />
      </div>
      <div className="topics">
        <div className="heading_outer">topics you can't miss</div>
        <TopicsCard />
        <TopicsCard />
      </div>
      <div className="footer">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="logo"></img>
          </div>
          <div className="left-footer">
            <div className="list">
              <ul>
                <li>Support</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="list">
              <ul>
                <li>Terms & Conditions</li>
                <li>Return & Refund Policy</li>
                <li>Shipping & Delivery POlicy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          {" "}
          Sea Basket | All Rights Reserved | 2021 Copyright
        </div>
      </div>
    </div>
  );
};

export default Home;
