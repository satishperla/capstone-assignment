import React from "react";
import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/contactData")
      .then((response) => setData(response.data))
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <Container className="text-center">
      <h3 className="py-3">Contact Us</h3>
      {
        data.map((item,i)=>(
      <Card >
        <Card.Body>
          <Card.Subtitle>
            <p>
              <img src="https://img.icons8.com/ios/20/null/country-house.png" />
              &nbsp; {item.address}
            </p>
            <br />
            <p>
              <img src="https://img.icons8.com/material-rounded/20/null/phone--v1.png" />
              &nbsp; {item.phone[0]}, {item.phone[1]}
            </p>
            <br />
            <p>
              <img src="https://img.icons8.com/ios-glyphs/20/000000/new-post.png" /> &nbsp;
              {item.email}
            </p>
          </Card.Subtitle>
        </Card.Body>
      </Card>
))}
    </Container>
  );
}
