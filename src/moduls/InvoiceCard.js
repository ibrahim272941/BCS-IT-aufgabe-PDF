import { Card } from "react-bootstrap";

import NextWeekIcon from "@mui/icons-material/NextWeek";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getInvoiceStart } from "../redux/mainredux/actions";
import EuroIcon from "@mui/icons-material/Euro";

const InvoiceCard = () => {
  const {
    displayName,
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);
  const { invoice } = useSelector((state) => state.invoice);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch(getInvoiceStart(localId));
  }, []);

  const total = Object.values(invoice)
    .map((item) => item.totalAmount)
    .reduce((sum, i) => parseFloat(sum) + parseFloat(i), 0);

  return (
    <div
      style={{
        margin: "6rem 0  0 6rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <NextWeekIcon
          sx={{ margin: "auto", fontSize: "4rem" }}
          color="primary"
        />
        <Card.Body className="d-flex justify-content-center flex-column align-items-center">
          <Card.Title>Total Invoice</Card.Title>
          <Card.Text>{Object.keys(invoice).length}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <EuroIcon sx={{ margin: "auto", fontSize: "4rem" }} color="success" />
        <Card.Body className="d-flex justify-content-center flex-column align-items-center">
          <Card.Title>Total Sales</Card.Title>
          <Card.Text>{total}€</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InvoiceCard;
