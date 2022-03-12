import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PersistentDrawerLeft from "../component/Modal";
import { deleteProduct, useFetch } from "../redux/mainredux/crudFunctions";
const columns = [
  { id: "img", label: "Image", minWidth: 180, align: "left" },
  { id: "title", label: "Title", minWidth: 170, align: "left" },
  { id: "price", label: "Price", minWidth: 100, align: "left" },
  { id: "quantity", label: "Quantity", minWidth: 170, align: "left" },
  { id: "action", label: "Actions", minWidth: 170, align: "left" },
];
const ViewProduct = () => {
  const [getProduct, results] = useFetch();
  const delProduct = (id) => {
    deleteProduct(id);
  };

  return (
    <>
      <PersistentDrawerLeft />
      <div className="container mx-6" style={{ marginTop: "5rem" }}>
        <Typography sx={{ margin: "7rem 0 2rem 0" }} variant="h5">
          SHOW PRODUCT
        </Typography>
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
                  return (
                    <TableRow
                      key={prod.id}
                      hover
                      role="checkbox"
                      tabIndex={-1}

                      //   onClick={(event) => handleClick(event, id)}
                    >
                      <TableCell>
                        <img style={{ width: "6rem" }} src={prod.img} />
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
                <TableCell>No Invoice to Show</TableCell>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ViewProduct;
