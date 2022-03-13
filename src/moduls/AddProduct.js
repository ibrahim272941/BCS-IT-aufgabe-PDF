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
import { useSelector } from "react-redux";

let values = {
  productTitle: "",
  price: "",
  quantity: "",
  img: "",
};
const AddProduct = () => {
  const navigate = useNavigate();
  const [initialValue, setValue] = useState(values);
  let { productTitle, price, quantity, img } = initialValue;
  const { id } = useParams();
  const [getProduct] = useFetch();

  const {
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (id) {
      setValue({ ...getProduct[id] });
    }
  }, [getProduct, id]);
  const handleSubmit = () => {
    if (isEmpty(id)) {
      navigate("/viewproduct");
      addProduct(initialValue, localId);
    } else {
      navigate("/viewproduct");
      updateProduct(id, initialValue, localId);
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
                value={productTitle || ""}
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
                value={price || ""}
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
                value={quantity || ""}
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
                value={img || ""}
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
