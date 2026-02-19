import './App.css'
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"

import Layout from '@/pages/Layout';
import Home from '@/pages/Home';

const Albums = lazy(() => import('@/pages/Albums'));
const Tracks = lazy(() => import('@/pages/Tracks'));
const Characters = lazy(() => import('@/pages/Characters'));
const Activities = lazy(() => import('@/pages/Activities'));
const About = lazy(() => import('@/pages/About'));
const Karaoke = lazy(() => import('@/pages/Karaoke'));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div></div>}>
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
        </Suspense>
      </Layout>
      <Toaster />
    </>
  );
}

export default App; 