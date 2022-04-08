import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import PersistentDrawerLeft from '../component/Modal';
import { getOrderStart } from '../redux/mainredux/actions';

const columns = [
  { id: 'img', label: 'Image', minWidth: 180, align: 'left' },
  { id: 'title', label: 'Title', minWidth: 170, align: 'left' },
  { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
  { id: 'quantity', label: 'Quantity', minWidth: 170, align: 'left' },
  { id: 'date', label: 'date', minWidth: 170, align: 'left' },
  { id: 'costumer', label: 'Costumer Name', minWidth: 170, align: 'left' },
];
const Orders = () => {
  const { orders } = useSelector((state) => state.invoice);
  const state = useSelector((state) => state.invoice);
  const dispatch = useDispatch();
  console.log(state);
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
            {orders.cart?.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <img style={{ width: '6rem' }} src={item.img} alt="img" />
                  </TableCell>
                  <TableCell>{item.productTitle}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{orders.date}</TableCell>
                  <TableCell>{orders.user}</TableCell>
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

{
  /* // : (
            //   <div className="text-center">
            //     <Spinner
            //       style={{
            //         width: '10rem',
            //         height: '10rem',
            //         marginTop: '10rem',
            //         alignItems: 'center',
            //         fontWeight: '900',
            //       }}
            //       animation="border"
            //       variant="warning"
            //       size="lg"
            //     />
            //   </div>
            // ) */
}
