import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PersistentDrawerLeft from "../component/Modal";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import {
  addProduct,
  updateProduct,
  useFetch,
} from "../redux/mainredux/crudFunctions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceStart } from "../redux/mainredux/actions";

const AddProduct = () => {
  let values = {
    productTitle: "",
    price: "",
    quantity: "",
    img: "",
  };
  const navigate = useNavigate();
  const [initialValue, setValue] = useState(values);
  let { productTitle, price, quantity, img } = initialValue;
  const { id } = useParams();
  const [getProduct] = useFetch();
  let getProduct2 = getProduct;
  const {
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);
  const data = useSelector((state) => state.invoice.invoice);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const dta = Object.values(getProduct).map((item) => item.productTitle);
  const quan =
    Object.values(getProduct) &&
    Object.values(data).filter((item, i) => dta.includes(item.productName));
  useEffect(() => {
    for (const key in getProduct) {
      if (Object.hasOwnProperty.call(getProduct, key)) {
        const value = getProduct[key];
        console.log(value);
      }
    }
  }, []);
  useEffect(() => {
    dispatch(getInvoiceStart(localId));
  }, [localId]);

  // getProduct2 = quan.filter((item, i) => {
  //   console.log(Object.values(getProduct)[i].includes(item.productName));
  //   if (Object.keys(getProduct).includes(item.productName)) {
  //     return (Object.values(getProduct2).quantity =
  //       Object.values(getProduct2).quantity - item.productQuantity);
  //   }
  // });
  console.log(quan);
  useEffect(() => {
    if (isEmpty(id)) {
      setValue({ ...values });
    } else {
      setValue({ ...getProduct[id] });
    }
  }, [id, getProduct]);
  const handleSubmit = () => {
    if (id) {
      updateProduct(id, initialValue);
      navigate("/viewproduct");
    } else {
      navigate("/viewproduct");
      addProduct(initialValue);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;

    setValue((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <PersistentDrawerLeft />
      <div className="container mx-6" style={{ marginTop: "5rem" }}>
        <Typography sx={{ margin: "7rem 0 2rem 0" }} variant="h5">
          ADD PRODUCT
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="productTitle"
                label="Product Title"
                variant="standard"
                value={productTitle}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="number"
                name="price"
                label="Product Price"
                variant="standard"
                value={price}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                name="quantity"
                label="Product Qauntity"
                variant="standard"
                value={quantity}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="img"
                label="Image URL"
                variant="standard"
                value={img}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                fullWidth
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
