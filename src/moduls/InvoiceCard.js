import { Card } from "react-bootstrap";

import NextWeekIcon from "@mui/icons-material/NextWeek";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getInvoiceStart } from "../redux/mainredux/actions";
import EuroIcon from "@mui/icons-material/Euro";

const InvoiceCard = () => {
  const {
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);
  const { invoice } = useSelector((state) => state.invoice);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoiceStart(localId));
  }, [localId]);

  const total = invoice
    ? Object.values(invoice)
        .map((item) => item.totalAmount)
        .reduce((sum, i) => parseFloat(sum) + parseFloat(i), 0)
    : 1;

  const amount = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(total);

  return (
    <div>
      {invoice ? (
        <>
          <div
            style={{
              marginTop: "6rem ",
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
              <EuroIcon
                sx={{ margin: "auto", fontSize: "4rem" }}
                color="success"
              />
              <Card.Body className="d-flex justify-content-center flex-column align-items-center">
                <Card.Title>Total Sales</Card.Title>

                <Card.Text>{amount}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              marginTop: "6rem ",
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
                <Card.Text>0</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <EuroIcon
                sx={{ margin: "auto", fontSize: "4rem" }}
                color="success"
              />
              <Card.Body className="d-flex justify-content-center flex-column align-items-center">
                <Card.Title>Total Sales</Card.Title>

                <Card.Text>0</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default InvoiceCard;
