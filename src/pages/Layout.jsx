import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, Music, Users, Gamepad2, Info, Disc3, Mic, Lock } from "lucide-react";

const baseNavigationItems = [
  { title: "Accueil", url: createPageUrl("Home"), icon: Home },
  { title: "Albums", url: createPageUrl("Albums"), icon: Disc3 },
  { title: "Chansons", url: createPageUrl("Tracks"), icon: Music },
  { title: "Karaoké", url: createPageUrl("Karaoke"), icon: Mic },
  { title: "Personnages", url: createPageUrl("Characters"), icon: Users },
  { title: "Activités", url: createPageUrl("Activities"), icon: Gamepad2 },
  { title: "À Propos", url: createPageUrl("About"), icon: Info },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [navigationItems, setNavigationItems] = useState(baseNavigationItems);

  useEffect(() => {
  }, [location.pathname]); // Re-run this effect when the URL path changes

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
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 md:gap-3">
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-purple-100 px-1 py-2">
        <div className="flex justify-around">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className={`flex flex-col items-center gap-1 px-2 py-2 rounded-xl transition-all duration-300 ${
                location.pathname === item.url
                  ? 'bg-purple-100 text-purple-700 scale-110'
                  : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-medium whitespace-nowrap">{item.title}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Footer Spacer for Mobile */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
}

