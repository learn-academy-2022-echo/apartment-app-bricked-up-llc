import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import ApartmentEdit from "./pages/ApartmentEdit";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentShow from "./pages/ApartmentShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import mockApartments from "./mockApartments";
import Navigation from "./components/Navigation";

const App = (props) => {
  const [apartments, setApartments] = useState(mockApartments);

  useEffect(() => {
    readApartments();
  }, []);

  const createApartment = (apartment) => {
    console.log(apartment);
  };

  const readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload);
      })
      .catch((error) => console.log(error));
  };

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route
          path="/apartmentindex"
          element={<ApartmentIndex apartments={apartments} />}
        />
        <Route path="/protectedapartmentindex" 
        element={<ApartmentIndex apartments={apartments} {...props}/>}
        />
        <Route
          path="/apartmentshow/:id"
          element={<ApartmentShow apartments={apartments} />}
        />
        <Route
          path="/apartmentnew"
          element={<ApartmentNew createApartment={createApartment} />}
        />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
