import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./Pages/CreateListing";
import UpdateListing from "./Pages/UpdateListing";
import Listing from "./Pages/Listing";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listing/:listingId" element={<Listing></Listing>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/create-listing"
            element={<CreateListing></CreateListing>}
          ></Route>
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
