import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

import InvoiceTitle from '../orderinvoice/InvoiceTitle';
import InvoiceNo from '../orderinvoice/InvoiceNo';
import BillTo from '../orderinvoice/BillTo';
import InvoiceItemsTable from '../orderinvoice/InvoiceItemsTable';
import InvoiceThankYouMsg from '../orderinvoice/InvoiceThankYouMsg';
import { onValue, query, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { database } from '../auth/getAuth';

import { useLocation } from 'react-router-dom';
import logo from '../invoice/logo.png';
import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
} from '@react-pdf/renderer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  height: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 74,
    height: 40,
  },
  viewer: {
    width: '47vw',
    height: '72vh',
  },
});
export default function CartViewInvoiceModal({ values, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { orders } = useSelector((state) => state.invoice);
  console.log(values);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ height: '1rem', padding: '1.5rem' }}
        variant="contained"
        color="warning"
      >
        Print Invoice
      </Button>
      <Button
        onClick={handleOpen}
        sx={{ height: '1rem', padding: '1.5rem', marginLeft: '1rem' }}
        variant="contained"
        color="success"
      >
        Complete the sale
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PDFViewer style={styles.viewer}>
            <Document>
              <Page size="A4" style={styles.page}>
                <Image style={styles.logo} src={logo} />
                <InvoiceTitle title="Invoice" />
                <InvoiceNo invoice={id.toString()} />
                <BillTo shipTo={values} />

                <InvoiceItemsTable invoice={values} />
                <InvoiceThankYouMsg />
              </Page>
            </Document>
            {/* {Object.values(data).length === 9 ? (
              <Document>
                <Page size="A4" style={styles.page}>
                  <Image style={styles.logo} src={logo} />
                  <InvoiceTitle title="Invoice" />
                  <InvoiceNo invoice={id.toString()} />
                  <BillTo invoice={data} />

                  <InvoiceItemsTable invoice={data} />
                  <InvoiceThankYouMsg />
                </Page>
              </Document>
            ) : (
              <Document>
                <Page size="A4" style={styles.page}>
                  <Image style={styles.logo} src={logo} />
                  <InvoiceTitle title="Invoice" />
                  <InvoiceNo invoice={id[0].toString()} />
                  <BillTo invoice={data} />

                  <InvoiceItemsTable invoice={data} />
                  <InvoiceThankYouMsg />
                </Page>
              </Document>
            )} */}
          </PDFViewer>
        </Box>
      </Modal>
    </div>
  );
}
