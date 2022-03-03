import Add from "../moduls/Add";
import AddCostumer from "../moduls/AddCoustumer";
import AddEditInvoice from "../moduls/AddEditInvoice";
import SelectCostumer from "../moduls/SelectCostumer";
import ViewInvoice from "../moduls/ViewInvoice";
import InvoiceList from "../moduls/InvoiceList";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/invoice" element={<AddEditInvoice />} />
      <Route path="/update/:id" element={<AddEditInvoice />} />
      <Route path="invoicelist" element={<InvoiceList />} />
      <Route path="/selectcostumer" element={<SelectCostumer />} />
      <Route path="/addcostumer" element={<AddCostumer />} />
      <Route path="/add" element={<Add />} />
      <Route path="/view" element={<ViewInvoice />} />
    </Routes>
  );
};

export default MainRouter;
