import React from "react";
import {Card,Container} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Jobs() {
  const navigate=useNavigate();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/jobs")
      .then((res) => res.json())
      .then((res) => {
        setJobs(res);
        console.log(res);
      });
  }, []);
  return (
    <div className="container">
      <div class="row justify-content-md-center card-container">
        <div class="col-md-auto">
          <Container className="text-center">
          {jobs.map((item, i) => {
            return (
              <Card className="singleCard m-3">
                <Card.Body>
                  <Card.Title>{item.post}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.company}
                  </Card.Subtitle>
                  <Card.Text className="cardtxt">
                    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/24/null/external-briefcase-private-investigator-flaticons-flat-flat-icons.png" />{" "}
                    {item.experience}
                    <img src="https://img.icons8.com/material-outlined/24/null/rupee.png" />
                    {item.package}
                    <img src="https://img.icons8.com/external-others-inmotus-design/40/null/external-Location-geo-others-inmotus-design-25.png" />
                    {item.location}
                  </Card.Text>
                  <button className="btn btn-primary"
                  onClick={() => navigate(`/apply/${item.id}`)}
                >
                  Apply Now
                </button>
                </Card.Body>
              </Card>
            );
          })}
          </Container>
        </div>
      </div>
    </div>
  );
}
