import PersistentDrawerLeft from "../component/Modal";
import InvoiceCard from "../moduls/InvoiceCard";

const MainPage = () => {
  return (
    <div>
      {/* <MainNavbar /> */}
      <PersistentDrawerLeft />
      <InvoiceCard />
    </div>
  );
};

export default MainPage;
