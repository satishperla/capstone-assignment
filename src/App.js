import Home from "./pages/Home";
import Jobs from "./components/Jobs";
import Contact from "./pages/Contact";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import ApplyJob from "./components/ApplyJob";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Icon from "./components/Icon";
import Age_restriction from "./components/Age_restriction";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Age_restriction/>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply/:id" element={<ApplyJob />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      <Icon />
    </div>
  );
}

export default App;
