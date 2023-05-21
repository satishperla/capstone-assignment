import React from 'react';
import ContactBanner from '../components/ContactBanner';
import ContactData from '../components/ContactData';
import GetInTouchForm from '../components/GetInTouchForm';

export default function Contact() {
  return (
    <div>
        <ContactBanner/>
        <ContactData/>
        <GetInTouchForm/>
    </div>
  )
}
