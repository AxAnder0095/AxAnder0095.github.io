import './App.css'
// import Navbar from "./Components/Navbar/Navbar.tsx";
// import {BrowserRouter} from "react-router-dom";
// import Header from "./Components/Header/Header.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Page/Home.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Footer from "./Components/Footer/Footer.tsx";
// import About from "./Page/About.tsx";


function App() {


    return (
        <div className="main">
            <Navbar/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="/about" element={<About />}/>*/}
                </Routes>
            </Router>
            <Footer/>
        </div>
    )
}

export default App
