import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Music, Calendar, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Albums() {
  // Albums réels basés sur vos images
  const realAlbums = [
    {
      id: 1,
      title: "Il était une chanson",
      description: "11 contes de Perrault revisités en musique - Une collection magique qui transforme les contes classiques en aventures musicales captivantes.",
      cover_url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3d74965a_PochetteAlbum.png",
      release_year: 2024,
      track_count: 11,
      genre: "Contes musicaux",
      spotify_url: "https://open.spotify.com/intl-fr/album/2M7OKkadyPnxeu9mIUzBl1?si=IBP8PPBAQVG1Jt-t7RARaQ",
      apple_music_url: "https://music.apple.com/us/album/il-%C3%A9tait-une-chanson-contes-de-perrault-en-musique/1805395995",
      youtube_music_url: "https://music.youtube.com/playlist?list=OLAK5uy_nI6lIN7ixBXFM3uWtKatp-6I1lF680G_E&si=3ALs63kvo504EvNL"
    },
    {
      id: 2,
      title: "Les Fables en Chantant",
      description: "Découvrez les fables de La Fontaine comme jamais auparavant ! Des mélodies joyeuses accompagnent ces histoires intemporelles pleines de sagesse.",
      cover_url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c8c4d1a1d_PochetteAlbumFables.jpg",
      release_year: 2024,
      track_count: 12,
      genre: "Fables musicales",
      spotify_url: "https://open.spotify.com/intl-fr/album/2sYatlscoPQhWLuVGfQAO6?si=12nlOStmRmOn8qZUqSBvzg",
      apple_music_url: "https://music.apple.com/us/album/les-fables-de-la-fontaine-en-chantant/1785950695",
      youtube_music_url: "https://music.youtube.com/playlist?list=OLAK5uy_lFpMxmSvzn5CjgaFMMTutpYs95AM5GOGM&si=-iHxlPBVaUbMwW9B"
    },
    {
      id: 3,
      title: "Molière en Chansons",
      description: "15 chansons pour découvrir le théâtre en chantant - L'univers théâtral de Molière adapté pour les jeunes avec humour et émotion.",
      cover_url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bed400a8b_pochette1.png",
      release_year: 2024,
      track_count: 15,
      genre: "Théâtre musical",
      spotify_url: "https://open.spotify.com/intl-fr/album/1ufjgwYGfUZxPA7IxnVl39?si=aztXzaHYSQ6hv7QBvsiFKA",
      apple_music_url: "https://music.apple.com/us/album/moli%C3%A8re-en-chansons/1808068128",
      youtube_music_url: "https://music.youtube.com/playlist?list=OLAK5uy_lhW314HOpImF0_Ag5tkxhP_CI19JEfG9U&si=2myRHxsmsS507nGl"
    }
  ];

  const displayAlbums = realAlbums;

  const StreamingButton = ({ url, platform, icon: Icon, color }) => (
    <Button
      asChild
      variant="outline"
      size="sm"
      className={`${color} border-current hover:bg-current hover:text-white transition-all duration-300`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Icon className="w-4 h-4 mr-2" />
        {platform}
      </a>
    </Button>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Nos Albums Musicaux
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une collection d'albums enchanteurs qui transforment l'apprentissage en aventure musicale
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {displayAlbums.map((album, index) => (
            <Card 
              key={album.id || index}
              className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-102 overflow-hidden"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Album Cover */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                    <img 
                      src={album.cover_url}
                      alt={album.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Play Button Overlay - Now links to Spotify */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        asChild
                        size="lg"
                        className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 rounded-full w-20 h-20"
                      >
                        <a href={album.spotify_url} target="_blank" rel="noopener noreferrer">
                          <Play className="w-8 h-8" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Album Details */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="mb-6">
                    <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
                      {album.genre}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                      {album.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {album.description}
                    </p>
                  </div>

                  {/* Album Info */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{album.release_year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Hash className="w-4 h-4" />
                      <span>{album.track_count} pistes</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Music className="w-4 h-4" />
                      <span>{album.genre}</span>
                    </div>
                  </div>

                  {/* Streaming Links */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 mb-3">Écouter sur :</h3>
                    <div className="flex flex-wrap gap-3">
                      <StreamingButton
                        url={album.spotify_url}
                        platform="Spotify"
                        icon={Music}
                        color="text-green-600"
                      />
                      <StreamingButton
                        url={album.apple_music_url}
                        platform="Apple Music"
                        icon={Music}
                        color="text-gray-800"
                      />
                      <StreamingButton
                        url={album.youtube_music_url}
                        platform="YouTube Music"
                        icon={Play}
                        color="text-red-600"
                      />
                    </div>
                  </div>

                  {/* Action Buttons - Now linking to album-specific pages */}
                  <div className="flex gap-3 mt-8">
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex-1"
                    >
                      <Link to={createPageUrl("Tracks")}>
                        <Music className="w-4 h-4 mr-2" />
                        Voir les pistes
                      </Link>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="border-purple-300 text-purple-600 hover:bg-purple-50"
                    >
                      <Link to={createPageUrl("Karaoke")}>
                        <Play className="w-4 h-4 mr-2" />
                        Karaoké
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Découvrez toute notre discographie
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Chaque album est une aventure unique qui éveille l'imagination et transmet des valeurs positives
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                <a href="https://open.spotify.com/playlist/7KfVNmhbQbK7GsgGti2Pxp?si=368b4d94fe4a4610" target="_blank" rel="noopener noreferrer">
                  <Music className="w-5 h-5 mr-2" />
                  Suivre sur Spotify
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                <Link to={createPageUrl("Karaoke")}>
                  <Play className="w-5 h-5 mr-2" />
                  Session Karaoké
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}