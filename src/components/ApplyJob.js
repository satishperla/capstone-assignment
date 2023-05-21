import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

import axios from "axios";
function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleInputChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValid = validateForm();

    if (formValid) {
      axios
        .post("http://localhost:4000/applications", {
          jobId: id,
          name: application.name,
          email: application.email,
          phone: application.phone,
          address: application.address,
          experience: application.experience,
        })

        .then((response) => {
          setSubmissionStatus(true);
          setApplication({
            name: "",
            email: "",
            phone: "",
            address: "",
            experience: "",
          });
          setTimeout(() => {
            navigate("/jobs");
          }, 5000);
        })

        .catch((error) => {
          console.log(error);
        });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!application.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z ]+$/.test(application.name.trim())) {
      errors.name = "Name can only contain letters and spaces";
    }

    if (!application.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(application.email.trim())
    ) {
      errors.email = "Invalid email format";
    }

    if (!application.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(application.phone.trim())) {
      errors.phone = "Phone must be a 10-digit number";
    }

    if (!application.experience.trim()) {
      errors.experience = "Experience is required";
    } else if (application.experience.trim().length < 10) {
      errors.experience = "Experience must be at least 10 characters";
    } else if (application.experience.trim().length > 150) {
      errors.experience = "Experience cannot be more than 150 characters";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };
  return (
    <div>
      {submissionStatus === true && (
        <p className="border border-2 rounded bg-success text-white p-2">
          <img src="https://img.icons8.com/flat-round/30/null/checkmark.png" />{" "}
          Application submitted successfully!
        </p>
      )}
      <h1 className="text-center"> Application Form</h1>
      <h5 className="text-info text-center">
        You are applying for Job ID: {id}
      </h5>
      <Container>
        <div
          className="card"
          id="jobs-section"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="card-body" id="jobs-form" style={{ width: "50rem" }}>
            <form onSubmit={handleSubmit} className="applyjob-form px-5">
              <Row className="mb-3">
                <Col md={6}>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formErrors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    value={application.name}
                    onChange={handleInputChange}
                  />
                  {formErrors.name && (
                    <div className="invalid-feedback">{formErrors.name}</div>
                  )}
                </Col>

                <Col md={6}>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      formErrors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    value={application.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && (
                    <div className="invalid-feedback">{formErrors.email}</div>
                  )}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${
                      formErrors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={application.phone}
                    onChange={handleInputChange}
                  />
                  {formErrors.phone && (
                    <div className="invalid-feedback">{formErrors.phone}</div>
                  )}
                </Col>
                <Col md={6}>
                  <label htmlFor="address" className="form-label">
                    Address (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Enter complete Address"
                    value={application.address}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <label htmlFor="experience" className="form-label">
                  Experience
                </label>
                <textarea
                  className={`form-control experience-details ${
                    formErrors.experience ? "is-invalid" : ""
                  }`}
                  id="experience"
                  name="experience"
                  rows="4"
                  placeholder="Enter your experience"
                  value={application.experience}
                  onChange={handleInputChange}
                  style={{ resize: "none" }}
                ></textarea>
                {formErrors.experience && (
                  <div className="invalid-feedback">
                    {formErrors.experience}
                  </div>
                )}
              </Row>
              <div className="text-center">
                <button type="submit" className="btn btn-primary ">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ApplyJob;
