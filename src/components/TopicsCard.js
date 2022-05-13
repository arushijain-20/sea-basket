import React from "react";
import Image from "../images/demo.jpg";
import "../css/TopicsCard.css";

const TopicsCard = () => {
  return (
    <div className="topicCard">
     
      <div className="txt">
        <div className="title">topics you can’t miss</div>
        <div className="desc">Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.</div>
        <div className="read_more">
            <a>Read More &gt;</a>
        </div>
      </div> <div className="img">
        <img src={Image} alt="img" width='100%' height='100%'/>
      </div>
    </div>
  );
};

export default TopicsCard;
