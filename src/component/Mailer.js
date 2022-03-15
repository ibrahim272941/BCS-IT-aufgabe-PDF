import { Button, Form } from "react-bootstrap";

import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export const message = {
  msg: "    Thank you very much for shopping from us.I hope \nyou are satisfied.You can find the invoice of our shopping \nin the attachment.\n\nSee you as soon as possible",
};
const Mailer = ({ values }) => {
  const navigate = useNavigate();
  console.log(values.length);

  const sendMail = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_wra63rk",
        "template_d1qne0y",
        e.target,
        "YKPj35s7U-bVmDrVu"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(e.target);
    navigate("/selectcostumer");
  };

  return (
    <div className="">
      {" "}
      <Form
        onSubmit={(e) => sendMail(e)}
        style={{ backgroundColor: "#9EA1A6" }}
        className="w-50 my-5 m-auto  p-4 "
      >
        <p className="text-dark fs-5 text-center font-weight-bold">
          Contact Form
        </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={
              values !== undefined && values.length >= 1
                ? values[0].costumerName
                : " "
            }
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={
              values !== undefined && values.length >= 1
                ? values[0].costumerEmail
                : " "
            }
            readOnly
          />
        </Form.Group>
        <Form.Label>Message</Form.Label>

        <Form.Control
          name="message"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          defaultValue={message.msg}
        />

        <Button
          className="my-3 w-100 text-white fs-4 font-weight-bold"
          style={{ backgroundColor: "#F39A02" }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Mailer;
