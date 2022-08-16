
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//    export default function App(){
//     return(
        
//         <BrowserRouter>
//         <h1>Value max code hub</h1>
        
//         <Routes>
//             <Route path="/" element={<Layout />}>
//                 <Route index element={<Home />}/>
//                 <Route path="About" element={<About />} />
//                 <Route path="Contact" element={<Contact />} />
//             </Route>
//         </Routes>
//         </BrowserRouter>
        
//     );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>  
        <App />
    </React.StrictMode>
);