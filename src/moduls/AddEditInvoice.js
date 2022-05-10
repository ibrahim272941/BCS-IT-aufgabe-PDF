import React, { useState, useEffect, useMemo, useContext } from 'react';

import { isEmpty } from 'lodash';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addInvoiceStart, editInvoiceStart } from '../redux/mainredux/actions';
import PersistentDrawerLeft from '../component/Modal';
import { successNote } from '../utils/customToastify';
import { updateProduct2, useFetch } from '../redux/mainredux/crudFunctions';
import { BaseContextUi } from '../contexts/BaseContext';
// import BasicModal from '../component/BasicModalAlert';

let d = new Date().toString().slice(0, 15).split(' ');
[d[1], d[2]] = [d[2], d[1]];
const VAT = 0.19;
let values = {
  costumerName: '',
  costumerEmail: '',
  costumerMobile: '',
  costumerAddres: '',
  productName: '',
  productPrice: '',
  productQuantity: '',
  totalAmount: '',
  invoiceDate: d.join(' '),
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
  const baseContext = useContext(BaseContextUi);
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

  let quan = Object.values(getPrice)
    .map((item) => item.productTitle === productName && item.quantity)
    .filter((item) => item !== false);
  let quanName = Object.values(getPrice).filter(
    (item) => item.productTitle === productName
  );

  const sendToContext = () => {
    if (selectedID.toString() !== '') {
      baseContext.ids.push(selectedID.toString(), productQuantity);
      updateProduct2(baseContext.ids, localId);
    }
  };

  useEffect(() => {
    for (let i = 0; i < Object.values(getPrice).length; i++) {
      const value = Object.values(getPrice)[i];

      productTitle.push(value.productTitle);
      if (productTitle.includes(value.productTitle)) {
        productTitle.filter(
          (item, index) => productTitle.indexOf(item) === index
        );
      }
      price.push(value.price);
      console.log(productTitle.includes(value.productTitle));
    }
    if (quan[0] < productQuantity) {
      alert(`The stock amount of the product you selected is ${quan[0]}`);
      navigate('/viewproduct', {
        state: {
          quanName,
        },
      });
    }
  }, [
    getPrice,
    productQuantity,
    quan,
    quanName,
    navigate,
    productTitle,
    price,
  ]);

  useEffect(() => {
    if (id) {
      setValues({ ...data2[id] });
    }
  }, [data2, id, productQuantity]);

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
      navigate('/invoicelist');
      dispatch(addInvoiceStart(initialValues, localId));
    } else {
      successNote('Invoice is created');
      navigate('/invoicelist');
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
  // const Ptitle = productTitle.filter(
  //   (item, index) => productTitle.indexOf(item) === index
  // );

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
  console.log(productName);
  return (
    <>
      <PersistentDrawerLeft />

      {/* {quan[0] < productQuantity && <BasicModal quan={quan[0]} />} */}
      {displayName ? (
        <div className="container mx-6" style={{ marginTop: '5rem' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
              <Grid item xs={8}>
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

              <Grid item xs={8}>
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
              <Grid item xs={8}>
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
              <Grid item xs={8}>
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
              <Grid item xs={8}>
                {productName === undefined ? (
                  <Autocomplete
                    options={productTitle}
                    onChange={handleChange2}
                    fullWidth
                    renderInput={(params, i) => (
                      <TextField
                        key={i}
                        {...params}
                        label="Select Product"
                        variant="standard"
                        name="productName"
                        value={productName}
                      />
                    )}
                  />
                ) : (
                  <TextField
                    label="Select Product"
                    variant="standard"
                    name="productName"
                    value={productName}
                    onChange={handleChange}
                    fullWidth
                  />
                )}
              </Grid>
              {/* <Grid item xs={8}>
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
              <Grid item xs={8}>
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
              <Grid item xs={8}>
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
              <Grid item xs={8}>
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

              <Grid item xs={8}>
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
