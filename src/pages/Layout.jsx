import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, Music, Users, Gamepad2, Info, Disc3, Mic, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const baseNavigationItems = [
  { title: "Accueil", url: "/", icon: Home },
  { title: "Albums", url: createPageUrl("Albums"), icon: Disc3 },
  { title: "Chansons", url: createPageUrl("Tracks"), icon: Music },
  { title: "Karaoké", url: createPageUrl("Karaoke"), icon: Mic },
  { title: "Personnages", url: createPageUrl("Characters"), icon: Users },
  { title: "Activités", url: createPageUrl("Activities"), icon: Gamepad2 },
  { title: "À Propos", url: createPageUrl("About"), icon: Info },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [navigationItems, setNavigationItems] = useState(baseNavigationItems);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <style>
        {`
          :root {
            --primary-purple: #8B5CF6;
            --primary-pink: #EC4899;
            --primary-blue: #3B82F6;
            --accent-yellow: #F59E0B;
            --accent-green: #10B981;
            --text-dark: #1F2937;
            --text-light: #6B7280;
          }
          
          .magic-gradient {
            background: linear-gradient(135deg, var(--primary-purple), var(--primary-pink), var(--primary-blue));
          }
          
          .bounce-gentle {
            animation: bounce-gentle 2s infinite;
          }
          
          @keyframes bounce-gentle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .text-gradient {
            background: linear-gradient(135deg, var(--primary-purple), var(--primary-pink));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}
      </style>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 magic-gradient rounded-full flex items-center justify-center bounce-gentle flex-shrink-0">
                <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm md:text-2xl font-bold text-gradient leading-tight">
                  <span className="block sm:inline">Pimentão</span>
                  <span className="block sm:inline sm:ml-2">en Chansons</span>
                </h1>
                <p className="text-xs md:text-sm text-purple-600 leading-tight">Les classiques en musique pour enfants</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    location.pathname === item.url
                      ? 'bg-purple-100 text-purple-700 shadow-lg scale-105'
                      : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:scale-105'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-md text-gray-600 hover:bg-purple-100"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`flex items-center gap-4 p-4 rounded-lg text-lg font-medium transition-colors ${
                      location.pathname === item.url ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/90 border-t border-purple-100 mt-16 py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Pimentão en Chansons</h3>
            <p className="text-gray-600 text-sm mb-2">Les classiques en musique pour enfants</p>
            <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Pimentão. Tous droits réservés.<span className="ml-2 text-gray-400 text-[10px] align-middle">v{typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "dev"}</span></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Découvrir</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="hover:text-purple-600 transition-colors font-semibold">Notre Blog</Link>
              </li>
              <li>
                <Link to="/albums" className="hover:text-purple-600 transition-colors">Albums</Link>
              </li>
              <li>
                <Link to="/tracks" className="hover:text-purple-600 transition-colors">Chansons</Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-purple-600 transition-colors">Activités</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/karaoke" className="hover:text-purple-600 transition-colors">Karaoké</Link></li>
              <li><Link to="/characters" className="hover:text-purple-600 transition-colors">Personnages</Link></li>
              <li><Link to="/about" className="hover:text-purple-600 transition-colors">À propos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="flex gap-3 mt-2">
              <a href="mailto:Pimentaoenchansons@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" title="Envoyer un email">
                {/* Icône email Lucide ou SVG */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,14 22,4"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

