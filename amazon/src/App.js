import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Carousel from "./Carousel";
import ItemContainer from "./ItemContainer";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Routes>
          <Route exact path="/"
          element={<div>
            <Header />
            <Carousel />
            <Home />
            <ItemContainer />
            <Footer />
          </div>} 
        />
        
        <Route exact path="/checkout" 
           element = {<p>Checking Out...</p>}
            />
          
          </Routes>
    </Router>
  );
}

export default App;
