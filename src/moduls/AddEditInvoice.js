import React, { useState, useEffect, useMemo, useContext } from "react";

import { isEmpty } from "lodash";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addInvoiceStart, editInvoiceStart } from "../redux/mainredux/actions";
import PersistentDrawerLeft from "../component/Modal";
import { successNote } from "../utils/customToastify";
import { updateProduct2, useFetch } from "../redux/mainredux/crudFunctions";
import { BaseContextUi } from "../contexts/BaseContext";

let d = new Date().toString().slice(0, 15).split(" ");
[d[1], d[2]] = [d[2], d[1]];
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
  invoiceDate: d.join(" "),
};

const AddEditInvoice = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [getPrice] = useFetch();

  const data2 = useSelector((state) => state.invoice.invoice);
  const {
    displayName,
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);
  const [initialValues, setValues] = useState(values);
  const [productTitle, setProductTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [seletedPrice, setSelectedPrice] = useState();
  let {
    costumerName,
    costumerEmail,
    costumerMobile,
    costumerAddres,
    productName,
    productPrice,
    productQuantity,
    totalAmount,
    invoiceDate,
  } = initialValues;
  const selectedID = Object.values(getPrice)
    .map(
      (item, i) => item.productTitle === productName && Object.keys(getPrice)[i]
    )
    .filter((item) => item !== false);

  const baseContext = useContext(BaseContextUi);

  const sendToContext = () => {
    if (selectedID.toString() !== "") {
      baseContext.ids.push(selectedID.toString(), productQuantity);

      updateProduct2(baseContext.ids, localId);
    }
  };

  useEffect(() => {
    for (let i = 0; i < Object.values(getPrice).length; i++) {
      const value = Object.values(getPrice)[i];

      productTitle.push(value.productTitle);
      price.push(value.price);
    }
  }, [getPrice]);
  useEffect(() => {
    if (id) {
      setValues({ ...data2[id] });
    }
  }, [data2, id]);

  useMemo(() => {
    const calc = parseFloat(
      productQuantity * (parseFloat(seletedPrice) + seletedPrice * VAT)
    ).toFixed(2);

    setValues((prev) => ({
      ...prev,
      totalAmount: calc,
    }));
  }, [seletedPrice, productQuantity]);

  const handleSubmit = async (userId) => {
    if (isEmpty(id)) {
      navigate("/invoicelist");
      dispatch(addInvoiceStart(initialValues, localId));
    } else {
      successNote("Invoice is created");
      navigate("/invoicelist");
      dispatch(editInvoiceStart(initialValues, localId, id));
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    let { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChange2 = (e) => {
    let prc;
    prc =
      price[
        productTitle.indexOf(e.target.innerText) === -1
          ? 0
          : productTitle.indexOf(e.target.innerText)
      ];
    setSelectedPrice(prc);
    setValues((prev) => ({
      ...prev,
      productName: e.target.innerText,
      productPrice: prc,
    }));
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
                <Autocomplete
                  options={productTitle}
                  onChange={handleChange2}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Product"
                      variant="standard"
                      name="productName"
                      value={productName}
                    />
                  )}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  type="text"
                  name="productName"
                  label="Product Name"
                  variant="standard"
                  value={productName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="productPrice"
                  label="Product Price"
                  variant="standard"
                  value={productPrice}
                  onChange={handleChange2}
                  fullWidth
                  InputProps={{ readOnly: true }}
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
                  onClick={sendToContext}
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
