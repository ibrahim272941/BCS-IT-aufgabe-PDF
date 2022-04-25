import { Helmet } from 'react-helmet-async';

import CostumerInfo from '../component/CostumerInfo';

import PersistentDrawerLeft from '../component/Modal';
import Chart from '../moduls/Chart';
import InvoiceCard from '../moduls/InvoiceCard';

const MainPage = () => {
  // let weg = useLocation().pathname;
  // if (weg === "asa") {
  //   alert("Page is not find");
  // }
  // console.log(weg);

  return (
    <div>
      {/* <MainNavbar /> */}
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <PersistentDrawerLeft />
      <InvoiceCard />
      <Chart />
      <CostumerInfo />
    </div>
  );
};

export default MainPage;
