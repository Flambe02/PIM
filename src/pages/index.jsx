import Layout from "./Layout.jsx";

import Home from "./Home";

import Tracks from "./Tracks";

import Characters from "./Characters";

import Activities from "./Activities";

import About from "./About";

import Albums from "./Albums";

import Karaoke from "./Karaoke";

import AdminKaraoke from "./AdminKaraoke";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Tracks: Tracks,
    
    Characters: Characters,
    
    Activities: Activities,
    
    About: About,
    
    Albums: Albums,
    
    Karaoke: Karaoke,
    
    AdminKaraoke: AdminKaraoke,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Tracks" element={<Tracks />} />
                
                <Route path="/Characters" element={<Characters />} />
                
                <Route path="/Activities" element={<Activities />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Albums" element={<Albums />} />
                
                <Route path="/Karaoke" element={<Karaoke />} />
                
                {/* <Route path="/AdminKaraoke" element={<AdminKaraoke />} /> */}
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}