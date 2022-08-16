import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Contact from "./Contact";
import Layout from "./Layout"

    function App(){
    return(
        
       < BrowserRouter>
        <h1>PRECIOUS CORNERSTONE UNIVERSITY</h1>
        
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
            </Route>
        </Routes>
        </BrowserRouter>
        
    )
}

export default App;
