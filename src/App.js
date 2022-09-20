import './App.scss';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// router
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Credentials from "./pages/Credentials";

function App() {
  return (
      <div>
          <HashRouter>
            <Navbar/>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}></Route>
                    <Route path={"/portfolio"} element={<Portfolio/>}></Route>
                    <Route path={"/credentials"} element={<Credentials/>}></Route>
                </Routes>
            <Footer/>
          </HashRouter>
      </div>
  );
}

export default App;
