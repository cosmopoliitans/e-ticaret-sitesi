import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Details />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
