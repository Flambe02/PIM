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
          <Route path="/albums" element={<Albums />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/about" element={<About />} />
          <Route path="/karaoke" element={<Karaoke />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div style={{padding: 40, textAlign: 'center', fontSize: 32}}>404 - Page non trouvée</div>} />
        </Routes>
      </Layout>
      <Toaster />
    </>
  );
}

export default App; 