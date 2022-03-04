import PersistentDrawerLeft from "../component/Modal";
import Chart from "../moduls/Chart";
import InvoiceCard from "../moduls/InvoiceCard";

const MainPage = () => {
  return (
    <div>
      {/* <MainNavbar /> */}
      <PersistentDrawerLeft />
      <InvoiceCard />
      <Chart />
    </div>
  );
};

export default MainPage;
