import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";

import React, { useState } from "react";

export default function BasicModal({ quan }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {" "}
          <Button
            onClick={handleOpen}
            sx={{ margin: ".6rem" }}
            color="warning"
            variant="contained"
          >
            Back to Product List
          </Button>
          <Typography variant="p">
            {`The stock amount of the product you selected is ${quan}`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
