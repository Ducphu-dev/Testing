import CardItem from "../CardItem/CardItem";
import "./CardList.scss";

function CardList(items: any) {
  return (
    <div className="list__card">
      {items.items.map((item: any, index: number) => (
        <CardItem key={index} item={item} />
      ))}
    </div>
  );
}

export default CardList;
