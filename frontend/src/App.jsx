import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shipment from "./pages/Shipment";
import CreateShipment from "./pages/CreateShipment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TrackShipment from "./pages/TrackShipment";
import Services from "./pages/Services";
import OurCustomers from "./pages/OurCustomers";
import Partner from "./pages/Partner";
import Careers from "./pages/Careers";
import LifeAtShipFlow from "./pages/LifeAtShipFlow";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipments" element={<Shipment />} />
        <Route path="/createshipment" element={<CreateShipment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trackshipment" element={<TrackShipment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customers" element={<OurCustomers />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/life-at-shipflow" element={<LifeAtShipFlow />}
        />
      </Routes>


    </BrowserRouter>
  );
}

export default App;