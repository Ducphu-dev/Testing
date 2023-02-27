import data from "../../../FakeData/mockData";
import CardList from "../../Components/CardList/CardList";

function Home() {
  return (
    <div className="page-home">
      <CardList items={data} />
    </div>
  );
}

export default Home;
