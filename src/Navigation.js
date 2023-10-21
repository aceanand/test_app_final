import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import  {
  Home,
  AboutUs,
  OurWork,
  ContactUs,
  Services
} from './Screens'
import Nav from './Components/Nav';

function Navigation() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route >
        <Route  path = '/' element={<Home />} />
        <Route path = '/AboutUs' element={<AboutUs />} />
        <Route path = '/OurWork' element={<OurWork />} />
        <Route path = '/Services' element={<Services />} />
        <Route path = '/ContactUs' element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default Navigation