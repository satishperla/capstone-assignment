import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function ButtonGroup() {
    const navigate = useNavigate();
  return (
    <div className="text-center bg-white">
        <Button
          type="button"
          variant="secondary"
          className="bannerButton"
          onClick={() => {
            navigate("/jobs");
          }}
        >
          Jobs
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="bannerButton"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Us
        </Button>
        <Button type="button" variant="secondary" className="bannerButton">
          Coming Soon
        </Button>
      </div>
  )
}
