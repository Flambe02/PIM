import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { createPageUrl } from "@/utils";
import { Play, Music, Heart, Star, Download, Users, Disc3, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pimentão en Chansons : Musique pour Enfants & Karaokés</title>
        <meta name="description" content="Découvrez 3 albums de musique pour enfants inspirés des classiques : Perrault, La Fontaine et Molière. Chansons, karaoké et activités éducatives en famille." />
        <link rel="canonical" href="https://www.pimentao.fr/" />
        <meta property="og:title" content="Pimentão en Chansons | Albums musicaux pour enfants" />
        <meta property="og:description" content="Découvrez 3 albums de musique pour enfants inspirés des classiques : Perrault, La Fontaine et Molière. Chansons, karaoké et activités éducatives en famille." />
        <meta property="og:url" content="https://www.pimentao.fr/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/preview.jpg"
            alt="Pimentão en Chansons - illustration"
            className="w-full h-full object-cover"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-pink-500/70 to-blue-500/80"></div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-green-300 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 z-10">
          <div className="text-center text-white">
            <div className="float-animation mb-8">
              <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30">
                <Music className="w-12 h-12" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient animate-pulse" style={{textAlign: 'center', textShadow: '2px 2px 8px rgba(0,0,0,0.35), 0 1px 0 #fff'}}>
              Pimentão en Chansons
            </h1>
            <p className="text-2xl md:text-3xl mb-2 font-light">
              La musique pour enfants qui réinvente les classiques
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              3 albums éducatifs pour apprendre en s'amusant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-pink-600 hover:bg-white/90 text-xl px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to={createPageUrl("Albums")}>
                  <Disc3 className="w-6 h-6 mr-2" />
                  Découvrir les albums
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 text-xl px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to={createPageUrl("Karaoke")}>
                  <Mic className="w-6 h-6 mr-2" />
                  Session Karaoké
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Featured Albums Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Des albums éducatifs et ludiques
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trois collections de chansons pour enfants qui transforment les grands classiques de la littérature française en aventures musicales inoubliables.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Il était une chanson",
                subtitle: "Contes de Perrault",
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3d74965a_PochetteAlbum.png",
                tracks: "11 contes musicaux",
                color: "from-orange-400 to-red-400"
              },
              {
                title: "Les Fables en Chantant",
                subtitle: "Fables de La Fontaine",
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c8c4d1a1d_PochetteAlbumFables.jpg",
                tracks: "12 fables musicales",
                color: "from-green-400 to-blue-400"
              },
              {
                title: "Molière en Chansons",
                subtitle: "Théâtre musical",
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bed400a8b_pochette1.png",
                tracks: "15 chansons théâtrales",
                color: "from-purple-400 to-pink-400"
              }
            ].map((album, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={album.image}
                    alt={`Pochette de l'album ${album.title} - ${album.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{album.title}</h3>
                    <p className="text-sm opacity-90">{album.subtitle}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{album.tracks}</p>
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    <Link to={createPageUrl("Albums")}>
                      <Play className="w-4 h-4 mr-2" />
                      Découvrir
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (Previously "Why kids love...") */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Apprendre en musique : nos engagements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chaque chanson pour enfant est conçue pour inspirer la créativité, l'apprentissage et la joie pure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Éducatif et Amusant</h3>
                <p className="text-gray-600">
                  Nos chansons pour apprendre transforment les grands classiques de la littérature en un moment de plaisir.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-pink-50 to-blue-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Valeurs Positives</h3>
                <p className="text-gray-600">
                  Chaque histoire enseigne de précieuses leçons sur l'amitié, la sagesse et le respect.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Qualité Professionnelle</h3>
                <p className="text-gray-600">
                  Une production musicale soignée et des arrangements modernes pour captiver l'attention des enfants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Prêts pour l'aventure musicale ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Écoutez nos albums de musique pour enfants sur toutes les plateformes de streaming et amusez-vous avec notre karaoké interactif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Link to={createPageUrl("Albums")}>
                <Disc3 className="w-6 h-6 mr-2" />
                Explorer les albums
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Link to={createPageUrl("Karaoke")}>
                <Mic className="w-6 h-6 mr-2" />
                Commencer le karaoké
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
