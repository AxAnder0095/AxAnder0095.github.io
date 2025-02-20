import './App.css'
// import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Page/Home.tsx";

function App() {
    // make sure the basename in the Router matches the basename
    // in the vite.config.ts file
    // Can use basename="/portfolio/" or basename={import.meta.env.BASE_URL}
    return (
        <div className="main">
            <Router basename={"/"}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
