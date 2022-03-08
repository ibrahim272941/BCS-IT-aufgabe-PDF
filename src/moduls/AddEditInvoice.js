import React, { useState, useEffect, useMemo } from "react";

import { isEmpty } from "lodash";
import { Button, Grid, TextField } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addInvoiceStart, editInvoiceStart } from "../redux/mainredux/actions";
import PersistentDrawerLeft from "../component/Modal";

const AddEditInvoice = () => {
  let d = new Date().toString().slice(0, 15).split(" ");
  [d[1], d[2]] = [d[2], d[1]];
  console.log(d.join(" "));
  const VAT = 0.19;
  let values = {
    costumerName: "",
    costumerEmail: "",
    costumerMobile: "",
    costumerAddres: "",
    productName: "",
    productPrice: "",
    productQuantity: "",
    totalAmount: "",
    // invoiceDate: d.join(" "),
  };

  const [initialValues, setValues] = useState(values);
  const dispatch = useDispatch();
  const {
    displayName,
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);
  let {
    costumerName,
    costumerEmail,
    costumerMobile,
    costumerAddres,
    productName,
    productPrice,
    productQuantity,
    totalAmount,
    // invoiceDate,
  } = initialValues;

  useMemo(() => {
    const calc = parseFloat(
      productQuantity * (parseFloat(productPrice) + productPrice * VAT)
    ).toFixed(2);
    setValues((prev) => ({ ...prev, totalAmount: calc }));
  }, [productPrice, productQuantity]);

  const navigate = useNavigate();

  const { id } = useParams();
  const data2 = useSelector((state) => state.invoice.invoice);

  useEffect(() => {
    if (isEmpty(id)) {
      setValues({ ...values });
    } else {
      setValues({ ...data2[id] });
    }
  }, [id, data2, localId]);

  const handleSubmit = async (userId) => {
    if (isEmpty(id)) {
      navigate("/invoicelist");
      dispatch(addInvoiceStart(initialValues, localId));
    } else {
      // const updates = {};
      // updates[`${localId}/${id}`] = initialValues;
      // update(ref(database), updates);
      navigate("/invoicelist");
      dispatch(editInvoiceStart(initialValues, localId, id));
    }
  };
  const handleChange = (e) => {
    e.preventDefault();

    let { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <PersistentDrawerLeft />
      {displayName ? (
        <div className="container mx-6" style={{ marginTop: "5rem" }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="costumerName"
                  label="Costumer Name"
                  variant="standard"
                  value={costumerName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="email"
                  name="costumerEmail"
                  label="Costumer Email"
                  variant="standard"
                  value={costumerEmail}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="tel"
                  name="costumerMobile"
                  label="Costumer Mobile"
                  variant="standard"
                  value={costumerMobile}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="costumerAddres"
                  label="Costumer Address"
                  variant="standard"
                  value={costumerAddres}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="productName"
                  label="Product Name"
                  variant="standard"
                  value={productName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="productPrice"
                  label="Product Price"
                  variant="standard"
                  value={productPrice}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="productQuantity"
                  label="Quantity"
                  variant="standard"
                  value={productQuantity}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                {}
                <TextField
                  type="number"
                  name="totalAmount"
                  label="Total amount"
                  variant="standard"
                  value={totalAmount}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ readOnly: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="warning"
                  fullWidth
                >
                  Create Invoice
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      ) : (
        <p>Please refresh the page</p>
      )}
    </>
  );
};

export default AddEditInvoice;
