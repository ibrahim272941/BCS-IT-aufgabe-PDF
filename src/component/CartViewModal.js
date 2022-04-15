import {
  Box,
  Button,
  Modal,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
} from '@react-pdf/renderer';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartViewInvoiceModal from './CartViewInvoiceModal';

const style = {
  // display: 'flex',
  // justifyContent: 'center',
  // flexDirection: 'column',
  alignItems: 'left',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '50vw',
  // height: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 8,
};
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',

    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 74,
    height: 40,
  },
  viewer: {
    width: '46vw',
    height: '72vh',
  },
});
const columns = [
  { id: 'img', label: 'Image', minWidth: 180, align: 'left' },
  { id: 'title', label: 'Title', minWidth: 170, align: 'left' },
  { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
  { id: 'quantity', label: 'Quantity', minWidth: 170, align: 'left' },
];
const BasicModal = ({ values, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [display, setDisplay] = useState(true);
  const { orders } = useSelector((state) => state.invoice);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          height: '1.5rem',
          padding: '.4rem',
          fontSize: '.7rem',
          marginTop: '.5rem',
        }}
        variant="contained"
        color="warning"
      >
        View Cart
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Button variant="contained" color="primary" onClick={handleClick}>
            Create Invoice
          </Button> */}
          <CartViewInvoiceModal id={id} values={orders[id]} />
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
          {values.map((item, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <img style={{ width: '6rem' }} src={item.img} alt="img" />
                </TableCell>
                <TableCell>{item.productTitle}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
