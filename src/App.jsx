//import ferramentas react 
import React from "react";
import { Routes, Route } from 'react-router-dom';
//Import componentes
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer"
//Import páginas
import Home from "./Pages/Home";
import Methodologies from "./Pages/Methodologies";
import Exams from "./Pages/Exams";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import CookiesPolicy from "./Pages/CookiesPolicy";
import LegalNotice from "./Pages/LegalNotice";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/methodologies" element={<Methodologies />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cookiesPolicy" element={<CookiesPolicy />} />
          <Route path="/legalNotice" element={<LegalNotice />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;