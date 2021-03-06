import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Register from '../pages/Register';
import Login from '../pages/Login';

import UserRoute from './UserRoute';
import AddEditInvoice from '../moduls/AddEditInvoice';
import InvoiceList from '../moduls/InvoiceList';
import AuthRouter from './AuthRouter';
import ViewInvoice from '../moduls/ViewInvoice';

import SelectCostumer from '../moduls/SelectCostumer';
import AddProduct from '../moduls/AddProduct';
import ViewProduct from '../moduls/ViewProduct';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { persistUser } from '../redux/auhtRedux/actions';
import { auth } from '../auth/getAuth';
import Orders from '../moduls/Orders';

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(persistUser(authUser));
      } else {
        dispatch(persistUser(null));
      }
    });
  }, [dispatch]);
  return (
    <Router>
      {/* {isLogin ? <MainRouter /> : <LogRouter />} */}

      <Routes>
        <Route element={<UserRoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/invoice" element={<AddEditInvoice />} />
          <Route path="/update/:id" element={<AddEditInvoice />} />
          <Route path="invoicelist" element={<InvoiceList />} />
          <Route path="/selectcostumer" element={<SelectCostumer />} />

          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct/:id" element={<AddProduct />} />
          <Route path="/viewproduct" element={<ViewProduct />} />
          <Route path="/view" element={<ViewInvoice />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route element={<AuthRouter />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
