import { useState } from "react";
import data from "../../../FakeData/mockData";
import "./DetailsItems.scss";

import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

function DetailsItems() {
  const [collaspe, setCollaspe] = useState(false);
  const location = useLocation();

  const productId = Number(location?.search.replace("?=", ""));

  const dataViewDetails = data?.find((el) => el?.edition === productId);

  const handleCollaspe = () => {
    setCollaspe(!collaspe);
  };

  return (
    <div className="details__items">
      <div className="details__left">
        <div className="details__image">
          <img src={dataViewDetails?.image} alt="" />
        </div>
      </div>
      <div className="details__right">
        <div className="details__infor">
          <div className="details__infor--name">{dataViewDetails?.name}</div>
        </div>
        <div className="details__decs">
          <div className="details__decs--attributes">
            <div
              className="attributes--collaspe"
              onClick={() => handleCollaspe()}
            >
              <Icon icon="ph:tag-simple-fill" width="24px" height="24px" />
              Attributes
              <div className={`arrow ${collaspe ? "open" : ""}`}>
                <Icon
                  icon="material-symbols:keyboard-arrow-down-rounded"
                  width="34px"
                  height="34px"
                />
              </div>
            </div>
            <div className={`attributes ${collaspe ? "open" : ""}`}>
              {dataViewDetails?.attributes?.map((el: any, index: number) => {
                return (
                  <div className="attributes--items" key={index}>
                    <div className="attributes__type">{el?.trait_type}</div>
                    <div className="attributes__name">{el?.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsItems;
