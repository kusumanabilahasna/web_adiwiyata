import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Beranda from './beranda'
import Gallery from'./gallery';
import HariBesar from'./haribesar';

const Utama = () => (
    
    <Routes>
        <Route exact path="/" element={<Beranda />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/haribesar" element={<HariBesar />} />
    </Routes>
    
)

export default Utama;

