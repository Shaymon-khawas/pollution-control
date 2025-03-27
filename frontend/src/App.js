import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Initiative from "./Components/Initiative";
import FAQ from "./Components/FAQ";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Register from "./Components/Register";  // Import Register Component

function App() {
  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/register/");
        console.log("Backend Response:", response.data);
      } catch (error) {
        console.error("Backend Error:", error.response ? error.response.data : error.message);
      }
    };

    fetchBackend();
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <LandingPage />
              <Initiative />
              <FAQ />
              <ContactUs />
            </>
          } 
        />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
