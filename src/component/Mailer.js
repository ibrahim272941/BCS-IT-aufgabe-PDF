import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const message = {
  msg: "    Thank you very much for shopping from us.I hope \nyou are satisfied.You can find the invoice of our shopping \nin the attachment.\n\nSee you as soon as possible",
};
const Mailer = ({ values }) => {
  const [name, setName] = useState([]);
  let values1 = name;

  useEffect(() => {
    setName(values);
  }, [values]);

  const sendMail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_wra63rk",
    //     "template_d1qne0y",
    //     e.target,
    //     "YKPj35s7U-bVmDrVu"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setName([]);
  };

  return (
    <div className="">
      {" "}
      <Form
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
            value={values1.length >= 1 ? values1[0].costumerName : " "}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={values1.length >= 1 ? values1[0].costumerEmail : " "}
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
          onClick={(e) => sendMail(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Mailer;
