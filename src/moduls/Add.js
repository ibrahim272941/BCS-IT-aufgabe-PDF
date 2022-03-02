import React, { useState, useEffect, useMemo } from "react";

import { isEmpty } from "lodash";
import { Button, Grid, TextField } from "@mui/material";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addInvoiceStart, editInvoiceStart } from "../redux/mainredux/actions";
import PersistentDrawerLeft from "../component/Modal";

const Add = () => {
  const { state } = useLocation();
  const VAT = 0.19;
  let values = {
    costumerName: state[0].costumerName,
    costumerEmail: state[0].costumerEmail,
    costumerMobile: state[0].costumerMobile,
    costumerAddres: state[0].costumerAddres,
    productName: "",
    productPrice: "",
    productQuantity: "",
    totalAmount: "",
  };
  console.log(state[0]);
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
    // dispatch(getInvoiceStart(localId));
  }, [id]);
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

export default Add;
