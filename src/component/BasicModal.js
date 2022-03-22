import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

import InvoiceTitle from '../invoice/InvoiceTitle';
import InvoiceNo from '../invoice/InvoiceNo';
import BillTo from '../invoice/BillTo';
import InvoiceItemsTable from '../invoice/InvoiceItemsTable';
import InvoiceThankYouMsg from '../invoice/InvoiceThankYouMsg';
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
export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const id = location.state;
  const [data, setData] = useState({});
  const {
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    let values = {};
    id.length > 1
      ? id.forEach((id, i) => {
          onValue(
            query(ref(database, `${localId}/invoice/${id}`)),
            (snapshot) => {
              values[i] = snapshot.val();
              setData({ ...values });
            }
          );
        })
      : onValue(
          query(ref(database, `${localId}/invoice/${id}`)),
          (snapshot) => {
            // values[0] = snapshot.val();
            setData({ ...snapshot.val() });
          }
        );
  }, [localId, id]);

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PDFViewer style={styles.viewer}>
            {Object.values(data).length === 9 ? (
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
            )}
          </PDFViewer>
        </Box>
      </Modal>
    </div>
  );
}
