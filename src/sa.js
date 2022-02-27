import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { delInvoiceStart, getInvoiceStart } from "../redux/mainredux/actions";
import PersistentDrawerLeft from "../component/Modal";
import { Button, TextField } from "@mui/material";
import { successNote } from "../utils/customToastify";
import { useBaseContext } from "../contexts/BaseContext";
import { ToastContainer, toast } from "react-toastify";
import { width } from "@mui/system";

const columns = [
  { id: "check", label: "", minWidth: 10, align: "left" },
  { id: "name", label: "Name", minWidth: 100, align: "left" },
  { id: "code", label: "Email", minWidth: 170, align: "left" },
  {
    id: "population",
    label: "Mobile",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Address",
    minWidth: 180,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Product",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "productPrice",
    label: "Price",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "productQuantity",
    label: "Quantity",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "totalAmount",
    label: "Total Amount",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Actions",
    minWidth: 120,
    align: "left",
  },
];

export default function StickyHeadTable() {
  const navigate = useNavigate();
  const [check, setCheck] = useState([]);
  const [search, setSearch] = useState("");
  const baseContext = useBaseContext();
  const uiProps = useMemo(
    () => ({
      ids: baseContext.ids,
      setIds: baseContext.setIds,
    }),
    [baseContext.setIds, baseContext.ids]
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const {
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);
  const data = useSelector((state) => state.invoice.invoice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoiceStart(localId));
    uiProps.setIds([]);
  }, []);

  const deleteInvoice = (id) => {
    if (window.confirm("Are you sure to delete the invoice")) {
      dispatch(delInvoiceStart(localId, id));
      successNote("Invoice is deleted");
      window.location.reload();
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChange = (id, e) => {
    !uiProps.ids.includes(id) && uiProps.setIds([...uiProps.ids, id]);

    check.push(e.target.checked);
    console.log(uiProps.ids);
  };

  const handleInvoice = () => {
    navigate("/view");
  };
  const handleChangeSearch = (e) => {
    let txt = e.target.value;
    setSearch(txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  };
  const data2 = Object.keys(data).filter((id) => {
    return search !== "" ? data[id].costumerName.includes(search) : id;
  });

  return (
    <>
      <PersistentDrawerLeft />{" "}
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          marginTop: "4rem",
        }}
      >
        <ToastContainer />
        <TextField
          name="search"
          label="Enter Costumer Name"
          onChange={(e) => handleChangeSearch(e)}
          color="warning"
          id="outlined-search"
          type="search"
          sx={{ margin: ".6rem 1rem", width: "16rem" }}
        />
        {uiProps.ids.length >= 1 && (
          <Button
            onClick={handleInvoice}
            sx={{ margin: ".6rem" }}
            variant="contained"
            color="warning"
          >
            View Invoice
          </Button>
        )}
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ marginLeft: "3rem" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data ? (
                data2.map((id, i) => {
                  return (
                    <>
                      <TableRow key={i} hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          {" "}
                          <Checkbox
                            onClick={(e) => handleChange(id, e)}
                            color="primary"
                            sx={{ width: "4px" }}
                          />
                        </TableCell>
                        <TableCell>{data[id].costumerName}</TableCell>
                        <TableCell>{data[id].costumerEmail}</TableCell>
                        <TableCell>{data[id].costumerMobile}</TableCell>
                        <TableCell>{data[id].costumerAddres}</TableCell>
                        <TableCell>{data[id].productName}</TableCell>
                        <TableCell>{data[id].productPrice}</TableCell>
                        <TableCell>{data[id].productQuantity}</TableCell>
                        <TableCell>{data[id].totalAmount}€</TableCell>

                        <TableCell>
                          <Link to={`/update/${id}`}>
                            <p className="btn text-primary">
                              <i className="fas fa-pencil" />
                            </p>
                          </Link>
                          <Link to="/invoicelist">
                            <p
                              className="btn text-danger"
                              onClick={() => deleteInvoice(id)}
                            >
                              <i className="fas fa-trash-alt" />
                            </p>
                          </Link>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })
              ) : (
                <TableCell>No Invoice to Show</TableCell>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data ? Object.keys(data).length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

<TableRow key={i} hover role="checkbox" tabIndex={-1}>
  <TableCell padding="checkbox">
    <Checkbox
      color="primary"
      checked={isItemSelected}
      inputProps={{
        "aria-labelledby": labelId,
      }}
    />
  </TableCell>
  <TableCell component="th" id={labelId} scope="row" padding="none"></TableCell>
  <TableCell align="right">{row.calories}</TableCell>
  <TableCell align="right">{row.fat}</TableCell>
  <TableCell align="right">{row.carbs}</TableCell>
  <TableCell align="right">{row.protein}</TableCell>
</TableRow>;
