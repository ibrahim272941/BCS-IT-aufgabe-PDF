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
import BasicModal from '../component/CartViewModal';

const columns = [
  { id: 'costumer', label: 'Name', minWidth: 170, align: 'left' },
  { id: 'costumer', label: 'Address', minWidth: 170, align: 'left' },
  { id: 'costumer', label: 'City', minWidth: 170, align: 'left' },
  { id: 'costumer', label: 'Country', minWidth: 170, align: 'left' },
  // { id: 'img', label: 'Image', minWidth: 180, align: 'left' },
  // { id: 'title', label: 'Title', minWidth: 170, align: 'left' },
  // { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
  // { id: 'quantity', label: 'Quantity', minWidth: 170, align: 'left' },
  { id: 'date', label: 'Date', minWidth: 170, align: 'left' },
  { id: 'view', label: 'View Cart', minWidth: 170, align: 'left' },
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
            {Object.values(orders)?.map((item, i) => {
              return (
                <TableRow key={i}>
                  {/* <TableCell>
                    <img style={{ width: '6rem' }} src={item.img} alt="img" />
                  </TableCell> */}
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <BasicModal key={i} values={item.cart} />
                  </TableCell>
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
