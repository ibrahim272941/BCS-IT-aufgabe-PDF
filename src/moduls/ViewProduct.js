import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PersistentDrawerLeft from "../component/Modal";
import {
  addProduct,
  deleteProduct,
  useFetch,
} from "../redux/mainredux/crudFunctions";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

import QRCode from "react-qr-code";

const columns = [
  { id: "qrCode", label: "Qr Code", minWidth: 180, align: "left" },
  { id: "img", label: "Image", minWidth: 180, align: "left" },
  { id: "title", label: "Title", minWidth: 170, align: "left" },
  { id: "price", label: "Price", minWidth: 100, align: "left" },
  { id: "quantity", label: "Quantity", minWidth: 170, align: "left" },
  { id: "action", label: "Actions", minWidth: 170, align: "left" },
];
const ViewProduct = () => {
  const [fetch, setFetch] = useState([]);
  const location = useLocation();
  const quanName = location.state;
  const navigate = useNavigate();
  const stoklessProduct = quanName
    ? Object.values(quanName)[0]
        .map((item) => item.productTitle)
        .toString()
    : [];

  const {
    currentUser: {
      reloadUserInfo: { localId },
    },
  } = useSelector((state) => state.user);

  const [getProduct, results] = useFetch();
  // const fetchProduct = async () => {
  //   const product = await axios.get("https://fakestoreapi.com/products");
  //   setFetch(product.data);
  // };
  // useState(() => {
  //   fetchProduct();
  //   fetch.map((item) => addProduct(item));
  // }, []);
  const delProduct = (id) => {
    deleteProduct(id, localId);
  };
  const navigateClick = () => {
    navigate("/addproduct");
  };

  return (
    <>
      <PersistentDrawerLeft />
      <div className="container mx-6" style={{ marginTop: "5rem" }}>
        <div className="d-flex justify-content-between ">
          <Typography sx={{ margin: ".2rem 0 2rem 0" }} variant="h5">
            REGISTERED PRODUCTS
          </Typography>
          <Button
            sx={{ height: "2rem", padding: "1.5rem" }}
            variant="contained"
            color="warning"
            onClick={navigateClick}
          >
            Add Product
          </Button>
        </div>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    // sx={{ marginLeft: "3rem" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {results && results.length > 0 ? (
                results.map((prod, i) => {
                  return stoklessProduct === prod.productTitle ? (
                    <TableRow
                      key={prod.id}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      // sx={{ backgroundColor: "#db540c" }}
                      className="stokless"

                      //   onClick={(event) => handleClick(event, id)}
                    >
                      <TableCell>
                        <img
                          style={{ width: "6rem" }}
                          src={prod.img}
                          alt="img"
                        />
                      </TableCell>
                      <TableCell>{prod.productTitle}</TableCell>
                      <TableCell>{prod.price}</TableCell>
                      <TableCell>{prod.quantity}</TableCell>

                      <TableCell>
                        <Link to={`/updateproduct/${prod.id}`}>
                          <p className="btn text-primary">
                            <i className="fas fa-pencil" />
                          </p>
                        </Link>
                        <Link to="/viewproduct">
                          <p
                            className="btn text-danger"
                            onClick={() => delProduct(prod.id)}
                          >
                            <i className="fas fa-trash-alt" />
                          </p>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow
                      key={prod.id}
                      hover
                      role="checkbox"
                      tabIndex={-1}

                      //   onClick={(event) => handleClick(event, id)}
                    >
                      <TableCell>
                        <QRCode
                          size={80}
                          value={`titel: ${prod.productTitle},
                              price: ${prod.price},
                              quantity: ${prod.quantity},`}
                        />
                      </TableCell>

                      <TableCell>
                        <img
                          style={{ width: "6rem" }}
                          src={prod.img}
                          alt="img"
                        />
                      </TableCell>
                      <TableCell>{prod.productTitle}</TableCell>
                      <TableCell>{prod.price}</TableCell>
                      <TableCell>{prod.quantity}</TableCell>

                      <TableCell>
                        <Link to={`/updateproduct/${prod.id}`}>
                          <p className="btn text-primary">
                            <i className="fas fa-pencil" />
                          </p>
                        </Link>
                        <Link to="/viewproduct">
                          <p
                            className="btn text-danger"
                            onClick={() => delProduct(prod.id)}
                          >
                            <i className="fas fa-trash-alt" />
                          </p>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell>No Product to Show</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ViewProduct;
