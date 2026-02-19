import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Play, Pause, Music, Clock, Heart, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState("moliere");

  useEffect(() => {
    // Plus besoin de charger des tracks depuis Base44
    setIsLoading(false);
  }, []);


  const albums = {
    moliere: {
      title: "Molière en Chansons",
      subtitle: "15 chansons pour découvrir le théâtre en chantant",
      cover: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bed400a8b_pochette1.png",
      embed: "https://open.spotify.com/embed/album/1ufjgwYGfUZxPA7IxnVl39?utm_source=generator",
      spotify_url: "https://open.spotify.com/intl-fr/album/1ufjgwYGfUZxPA7IxnVl39?si=aztXzaHYSQ6hv7QBvsiFKA",
      apple_music_url: "https://music.apple.com/us/album/moli%C3%A8re-en-chansons/1808068128",
      youtube_music_url: "https://music.youtube.com/playlist?list=OLAK5uy_lhW314HOpImF0_Ag5tkxhP_CI19JEfG9U&si=2myRHxsmsS507nGl",
      color: "from-purple-600 to-indigo-600"
    },
    perrault: {
      title: "Il était une chanson",
      subtitle: "11 contes de Perrault revisités en musique",
      cover: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3d74965a_PochetteAlbum.png",
      embed: "https://open.spotify.com/embed/album/2M7OKkadyPnxeu9mIUzBl1?utm_source=generator",
      spotify_url: "https://open.spotify.com/intl-fr/album/2M7OKkadyPnxeu9mIUzBl1?si=IBP8PPBAQVG1Jt-t7RARaQ",
      apple_music_url: "https://music.apple.com/us/album/il-%C3%A9tait-une-chanson-contes-de-perrault-en-musique/1805395995",
      youtube_music_url: "https://music.youtube.com/playlist?list=OLAK5uy_nI6lIN7ixBXFM3uWtKatp-6I1lF680G_E&si=3ALs63kvo504EvNL",
      color: "from-orange-500 to-red-500"
    },
    fables: {
      title: "Les Fables en Chantant",
      subtitle: "Fables de La Fontaine en musique",
      cover: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c8c4d1a1d_PochetteAlbumFables.jpg",
      embed: "https://open.spotify.com/embed/album/2sYatlscoPQhWLuVGfQAO6?utm_source=generator",
      spotify_url: "https://open.spotify.com/intl-fr/album/2sYatlscoPQhWLuVGfQAO6?si=12nlOStmRmOn8qZUqSBvzg",
      apple_music_url: "https://music.apple.com/us/album/les-fables-de-la-fontaine-en-chantant/1785950695",
      youtube_music_url: "https://music.youtube.com/playlist?list=OLAK5uy_lFpMxmSvzn5CjgaFMMTutpYs95AM5GOGM&si=-iHxlPBVaUbMwW9B",
      color: "from-green-500 to-blue-500"
    }
  };

  const currentAlbum = albums[selectedAlbum];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-purple-600">Chargement des chansons magiques...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>Toutes les Chansons pour Enfants | Pimentão en Chansons</title>
        <meta name="description" content="Écoutez toutes les chansons pour enfants de Pimentão : Molière en Chansons, Contes de Perrault, Fables de La Fontaine. 38 chansons éducatives sur Spotify et Apple Music." />
        <link rel="canonical" href="https://www.pimentao.fr/tracks" />
        <meta property="og:title" content="Toutes les Chansons pour Enfants | Pimentão en Chansons" />
        <meta property="og:description" content="38 chansons éducatives pour enfants : Molière, Perrault, La Fontaine. Disponibles sur Spotify, Apple Music et YouTube Music." />
        <meta property="og:url" content="https://www.pimentao.fr/tracks" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-8" style={{textAlign: 'center'}}>Toutes nos chansons pour enfants</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Bienvenue dans l'univers musical de Pimentão ! Nous créons avec passion des chansons pour enfants bienveillantes et intelligentes, parfaites pour apprendre, danser, ou pour le rituel du coucher. Découvrez ci-dessous toutes nos créations disponibles en écoute.
          </p>
        </div>

        {/* Album Selection */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-md sm:w-auto sm:max-w-none">
            <div className="flex flex-col sm:flex-row sm:bg-white/80 sm:backdrop-blur-md sm:rounded-full sm:p-2 sm:shadow-lg gap-2">
              {Object.entries(albums).map(([key, album]) => (
                <Button
                  key={key}
                  variant={selectedAlbum === key ? "default" : "ghost"}
                  onClick={() => setSelectedAlbum(key)}
                  className={`w-full sm:w-auto justify-center rounded-full px-4 sm:px-6 py-3 sm:py-2 text-base sm:text-sm transition-all duration-300 ${
                    selectedAlbum === key
                      ? `bg-gradient-to-r ${album.color} text-white shadow-lg scale-105`
                      : 'bg-white/80 backdrop-blur-md shadow-md sm:shadow-none sm:bg-transparent hover:bg-purple-50 hover:text-purple-600 hover:scale-105'
                  }`}
                >
                  {album.title}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Current Album Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Album Cover & Info */}
          <div>
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="relative h-96">
                <img 
                  src={currentAlbum.cover}
                  alt={currentAlbum.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{currentAlbum.title}</h2>
                  <p className="text-lg opacity-90">{currentAlbum.subtitle}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Spotify Embed */}
          <div>
            <Card className="border-none shadow-2xl overflow-hidden h-96">
              <CardContent className="p-0 h-full">
                <iframe 
                  style={{borderRadius: '12px'}} 
                  src={currentAlbum.embed}
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title={`${currentAlbum.title} - Spotify Player`}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Écoutez partout, à tout moment
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Retrouvez tous nos albums sur vos plateformes de streaming préférées
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <a href={currentAlbum.spotify_url} target="_blank" rel="noopener noreferrer">
                  <Music className="w-5 h-5 mr-2" />
                  Spotify
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white">
                <a href={currentAlbum.apple_music_url} target="_blank" rel="noopener noreferrer">
                  <Music className="w-5 h-5 mr-2" />
                  Apple Music
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                <a href={currentAlbum.youtube_music_url} target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2" />
                  YouTube Music
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
