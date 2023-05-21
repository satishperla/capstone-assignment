import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import contact_image from "../Images/contactUs.jpg";

export default function GetInTouchForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);
  useEffect(() => {
    if (formSuccess) {
      const timeoutId = setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [formSuccess]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("http://localhost:4000/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setFormSuccess(true);

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          console.log("Error saving data to server");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!data.name || !nameRegex.test(data.name)) {
      errors.name = "Please enter a valid name";
    }
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!data.phone || !phoneRegex.test(data.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (
      !data.message ||
      data.message.length < 10 ||
      data.message.length > 150
    ) {
      errors.message = "Please enter a message between 10 and 150 characters";
    }
    return errors;
  };
  return (
    <div>
      {formSuccess === true && (
        <p className="border border-2 rounded bg-success text-white p-2">
          <img alt="" src="https://img.icons8.com/flat-round/30/null/checkmark.png" />
          Suggestions sent successfully!
        </p>
      )}
      <Container>
        <Row className=" py-3">
          <Col md={6}>
            <h3 className="text-center">Get In Touch</h3>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formBasicName">
                <Form.Label className="label">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  isInvalid={formErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label className="label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  isInvalid={formErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPhone">
                <Form.Label className="label">Phone number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                  isInvalid={formErrors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label className="label">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Enter message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input"
                  isInvalid={formErrors.message}
                  style={{ resize: "none" }}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.message}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit" className="submit-btn">
                  Submit
                </Button>
              </div>
              <p>{formSuccess}</p>
            </Form>
          </Col>
          <Col md={6}>
            <br />
            <br />
            <img src={contact_image} alt="contact" className="contact-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
