import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PersistentDrawerLeft from "../component/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getInvoiceStart } from "../redux/mainredux/actions";
import { useState } from "react";
import { Table } from "react-bootstrap";
import Mailer from "../component/Mailer";

export default function SelectCostumer() {
  const [show, setShow] = useState(true);
  const [select, setSelect] = useState();
  const {
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);
  const { invoice } = useSelector((state) => state.invoice);
  const selectedCostumer =
    invoice !== null &&
    Object.values(invoice).filter((item) => select === item.costumerName);
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInvoiceStart(localId));
  }, [dispatch, localId]);
  const costumer =
    invoice !== null
      ? Object.values(invoice).map((item) => item.costumerName)
      : ["There is Costumer to show"];
  const data =
    invoice !== null
      ? costumer.filter((item, i) => costumer.indexOf(item) === i)
      : ["There is Costumer to show"];
  const handleChange = (e) => {
    setSelect(e.target.innerText);
  };

  return (
    <div>
      <PersistentDrawerLeft />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data}
        onChange={(e) => handleChange(e)}
        sx={{ width: 300, margin: "auto", marginTop: "6rem" }}
        renderInput={(params) => (
          <TextField {...params} label="Select Costumer" />
        )}
      />
      {selectedCostumer[0] ? (
        <div className="border w-75 m-auto mt-5">
          <h2>{selectedCostumer[0].costumerName}</h2>
          <p>{selectedCostumer[0].costumerAddres}</p>
          <p>{selectedCostumer[0].costumerMobile}</p>
          <p>{selectedCostumer[0].costumerEmail}</p>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Description</th>
                <th>Date</th>
                <th> Price</th>
              </tr>
            </thead>
            {selectedCostumer.map((item, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td>{item.productName}</td>
                    <td>{item.invoiceDate}</td>
                    <td>{item.productPrice}€</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      ) : (
        <p>Select a Costumer</p>
      )}
      <Mailer values={selectedCostumer} />
    </div>
  );
}
