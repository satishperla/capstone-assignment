import React from 'react';
import { Card } from 'react-bootstrap';
import banner_image from "../Images/banner.jpg"

export default function ContactBanner() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={banner_image} alt="Card image" />
    </Card>
  )
}
