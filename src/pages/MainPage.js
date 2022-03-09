import CostumerInfo from "../component/CostumerInfo";
import Mailer from "../component/Mailer";
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
      <CostumerInfo />
      <Mailer />
    </div>
  );
};

export default MainPage;
