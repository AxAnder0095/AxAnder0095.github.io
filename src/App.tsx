import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Page/Home.tsx";
// import Navbar from "./Components/Navbar/Navbar.tsx";
// import Footer from "./Components/Footer/Footer.tsx";

function App() {


    return (
        <div className="main">
            {/*<Navbar/>*/}
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>
            {/*<Footer/>*/}
        </div>
    )
}

export default App
