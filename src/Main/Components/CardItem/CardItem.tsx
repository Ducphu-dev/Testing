import "./CardItem.scss";
import moment from "moment";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

function CardItem(item: any) {
  return (
    <Link to={`/details?=` + item?.item?.edition} className="card__item">
      <div className="card__item--wrapper">
        <div className="card__item--image">
          <img src={item?.item?.image} alt="" />
        </div>
        <div className="card__item--infor">
          <div className="card__item--infor-name">{item?.item?.name}</div>
          <div className="card__item--infor-decs">
            {item?.item?.description}
          </div>
          <div className="card__item--infor-date">
            {moment(item?.item?.date).format("DD/MM/YYYY")}
          </div>
        </div>
        <div className="card__item--addToCard">
          <div className="add">Add to card</div>
          <div className="icon">
            <Icon icon="mdi:lightning-bolt" width="24px" height="24px" />
          </div>
        </div>
        <div className="card__item--chain">
          <div className="icon">
            <Icon icon="mdi:ethereum" width="20px" height="20px" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
