import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

import InvoiceTitle from '../orderinvoice/InvoiceTitle';
import InvoiceNo from '../orderinvoice/InvoiceNo';
import BillTo from '../orderinvoice/BillTo';
import InvoiceItemsTable from '../orderinvoice/InvoiceItemsTable';
import InvoiceThankYouMsg from '../orderinvoice/InvoiceThankYouMsg';

import { useEffect, useState } from 'react';

import logo from '../invoice/logo.png';
import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
} from '@react-pdf/renderer';
import { useDispatch } from 'react-redux';
import { saleOrderStart } from '../redux/mainredux/actions';

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
    width: '45vw',
    height: '72vh',
  },
});
export default function CartViewInvoiceModal({ values, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const completeSale = () => {
    console.log(values, id);
    alert("Don't forget to print your invoice!");
    dispatch(saleOrderStart(values));
    handleOpen(false);
  };

  return (
    <>
      {/* <Button
        onClick={handleOpen}
        sx={{ height: '1rem', padding: '1.5rem' }}
        variant="contained"
        color="warning"
      >
        Print Invoice
      </Button> */}
      <Button
        onClick={completeSale}
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
    </>
  );
}
