import './App.scss';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// router
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Credentials from "./pages/Credentials";

function App() {
  return (
      <div>
          <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route exact path={"/home"} element={<Home/>}></Route>
                    <Route path={"/dev-portfolio"} element={<Portfolio/>}></Route>
                    <Route path={"/credentials"} element={<Credentials/>}></Route>
                </Routes>
            <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
