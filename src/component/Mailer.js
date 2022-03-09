import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Mailer = () => {
  const message = {
    msg: "    Thank you very much for shopping from us.I hope \nyou are satisfied.You can find the invoice of our shopping \nin the attachment.\n\nSee you as soon as possible",
  };
  console.log(message.msg);
  const sendMail = (e) => {
    e.preventDefault();
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
    e.target.reset();
  };
  return (
    <div className="">
      {" "}
      <Form
        onSubmit={sendMail}
        className="w-50 my-5 m-auto border p-5 bg-secondary"
      >
        <p className="text-white fs-5 text-center">Contact Form</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        <Form.Label>Message</Form.Label>

        <Form.Control
          name="message"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          value={message.msg}
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Mailer;
