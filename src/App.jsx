import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"

import Layout from '@/pages/Layout';
import Home from '@/pages/Home';
import Albums from '@/pages/Albums';
import Tracks from '@/pages/Tracks';
import Characters from '@/pages/Characters';
import Activities from '@/pages/Activities';
import About from '@/pages/About';
import Karaoke from '@/pages/Karaoke';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Tracks" element={<Tracks />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/About" element={<About />} />
          <Route path="/Karaoke" element={<Karaoke />} />
        </Routes>
      </Layout>
      <Toaster />
    </>
  );
}

export default App; 