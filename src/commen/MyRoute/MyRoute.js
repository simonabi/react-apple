import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../components/Main/Main';
import Mac from '../../Pages/Mac';
import Iphone from "../../Pages/Iphone"
import Ipad from "../../Pages/Ipad";
import Watch from '../../Pages/Watch';
import Music from '../../Pages/Music';
import Tv from '../../Pages/Tv';
import Support from '../../Pages/Support';
import FourO4 from '../../Pages/Four04';
function MyRoute() {
    return (
        <Routes>
           
            <Route path="/" element={<Main />} />
            <Route path="/Mac" element={<Mac />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/Ipad" element={<Ipad />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/music" element={<Music />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<FourO4 />} />
          
        </Routes>
    );
}

export default MyRoute;



