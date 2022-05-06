import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import PersistentDrawerLeft from '../component/Modal';
import { getOrderStart } from '../redux/mainredux/actions';
import BasicModal from '../component/CartViewModal';

const columns = [
  { id: 'costumer', label: 'Name', minWidth: 170, align: 'left' },
  { id: 'phoneNumber', label: 'Phone Number', minWidth: 170, align: 'left' },
  { id: 'address', label: 'Address', minWidth: 170, align: 'left' },
  { id: 'city', label: 'City', minWidth: 170, align: 'left' },
  { id: 'country', label: 'Country', minWidth: 170, align: 'left' },
  // { id: 'img', label: 'Image', minWidth: 180, align: 'left' },
  // { id: 'title', label: 'Title', minWidth: 170, align: 'left' },
  // { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
  // { id: 'quantity', label: 'Quantity', minWidth: 170, align: 'left' },
  { id: 'date', label: 'Date', minWidth: 170, align: 'left' },
  { id: 'view', label: 'View Cart', minWidth: 170, align: 'left' },
];
const Orders = () => {
  const { orders } = useSelector((state) => state.invoice);
  const { saledCompleted } = useSelector((state) => state.invoice);
  console.log(saledCompleted);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderStart());
  }, [dispatch]);
  return (
    <div
      style={{
        marginTop: '6rem ',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {' '}
      <Helmet>
        <title>Orders Page</title>
      </Helmet>
      <PersistentDrawerLeft />
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(orders)?.map((id) => {
              return (
                <TableRow key={id}>
                  {/* <TableCell>
                    <img style={{ width: '6rem' }} src={item.img} alt="img" />
                  </TableCell> */}
                  <TableCell>{orders[id].fullName}</TableCell>
                  <TableCell>{orders[id].phoneNumber}</TableCell>
                  <TableCell>{orders[id].address}</TableCell>
                  <TableCell>{orders[id].city}</TableCell>
                  <TableCell>{orders[id].country}</TableCell>
                  <TableCell>{orders[id].date}</TableCell>
                  <TableCell>
                    <BasicModal values={orders[id].cart} id={id} />
                  </TableCell>
                  {saledCompleted ? <TableCell>Saled</TableCell> : null}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
