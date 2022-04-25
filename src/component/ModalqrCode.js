import { Box, Button, Modal } from '@mui/material';

import React, { useState } from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
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

const ModalqrCode = ({ value, productValue }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [display, setDisplay] = useState(true);
  const handleClick = (e) => {
    window.print();
    setDisplay(!display);
  };
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
        color="primary"
      >
        Print Qr Code
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="my-4">{value}</div>
          <div onClick={handleClick}>{value.props.value}</div>

          {/* <PDFViewer style={styles.viewer}>
            <Document>
              <Page size="A4" style={styles.page}>
               
              </Page>
            </Document>
          </PDFViewer> */}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalqrCode;
