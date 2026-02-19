import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { liensKaraoke } from "@/data/liensKaraoke.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, Pause, Music, Mic, Star, Loader2, X, ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Karaoke() {
  const [allTracks, setAllTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [introPage, setIntroPage] = useState(1);

  useEffect(() => {
    // Les données sont maintenant chargées depuis le fichier local
    setAllTracks(liensKaraoke);
    setIsLoading(false);
  }, []);

  const startKaraoke = (track) => {
    setSelectedTrack(track);
    setShowVideo(true);
  };

  const closeKaraoke = () => {
    setSelectedTrack(null);
    setShowVideo(false);
  };

  const difficultyColors = {
    "Facile": "bg-green-100 text-green-800",
    "Moyen": "bg-yellow-100 text-yellow-800",
    "Difficile": "bg-red-100 text-red-800"
  };

  const StreamingButton = ({ url, platform, icon: Icon, color }) => {
    if (!url) return null;
    return (
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
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin mx-auto mb-4 text-purple-500" />
          <p className="text-xl text-purple-600">Chargement des chansons...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>Karaoké pour Enfants Gratuit | Pimentão en Chansons</title>
        <meta name="description" content="Chantez en famille avec notre karaoké pour enfants ! Contes de Perrault, Fables de La Fontaine, Molière en chansons. Gratuit, en ligne, pour tous les âges." />
        <link rel="canonical" href="https://www.pimentao.fr/karaoke" />
        <meta property="og:title" content="Karaoké pour Enfants Gratuit | Pimentão en Chansons" />
        <meta property="og:description" content="Chantez en famille avec notre karaoké pour enfants ! Contes, fables et Molière en chansons. Gratuit et en ligne." />
        <meta property="og:url" content="https://www.pimentao.fr/karaoke" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-8" style={{textAlign: 'center'}}>Karaoké pour enfants</h1>
          <p className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            🎤 Session Karaoké 🎤
          </p>
          <div className="karaoke-introduction bg-white/80 shadow rounded-xl py-5 px-4 md:px-8 mx-auto max-w-6xl mb-6 border border-purple-100">
            <h2 className="text-lg md:text-xl font-semibold text-purple-600 mb-3">À vous de chanter ! La scène est ouverte</h2>
            <div className="max-w-3xl mx-auto">
              {introPage === 1 ? (
                <>
                  <p className="text-base text-gray-700 leading-normal mb-2">
                    Poussez les meubles, montez le son et préparez-vous à chanter en chœur ! Notre section Karaoké est l'endroit parfait pour des moments de pure joie en famille. Bien plus qu'un simple divertissement, chanter sur ses mélodies préférées est une formidable manière pour les enfants d'exprimer leurs émotions, de gagner en confiance et d'améliorer leur lecture et leur élocution sans même s'en rendre compte.
                  </p>
                  <p className="text-base text-gray-700 leading-normal mb-2">
                    Toutes nos chansons sont disponibles ici en version instrumentale, avec des paroles qui défilent à l'écran, faciles à suivre pour les chanteurs de tous âges. C'est l'occasion rêvée de devenir la star de son propre spectacle, de réinterpréter les aventures de nos personnages et de créer des souvenirs mémorables.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-base text-gray-700 leading-normal mb-2">
                    Alors, que vous prépariez une fête d'anniversaire, une après-midi pluvieuse ou simplement une session de chant improvisée dans le salon, nos karaokés sont là pour vous accompagner. Choisissez une chanson, prenez un micro (ou une brosse à cheveux !) et que le spectacle commence !
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <button onClick={() => setIntroPage(1)} aria-label="Page 1" className={`w-3 h-3 rounded-full border border-purple-400 transition ${introPage === 1 ? 'bg-purple-500' : 'bg-white'}`}></button>
              <button onClick={() => setIntroPage(2)} aria-label="Page 2" className={`w-3 h-3 rounded-full border border-purple-400 transition ${introPage === 2 ? 'bg-purple-500' : 'bg-white'}`}></button>
            </div>
          </div>
        </div>

        {/* Tracks Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
            Choisissez votre chanson
          </h2>
          
          {allTracks.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTracks.map((track) => (
                <Card 
                  key={track.id}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                  onClick={() => startKaraoke(track)}
                >
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100">
                    {track.album_cover ? (
                      <img 
                        src={track.album_cover} 
                        alt={track.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                          <Music className="w-10 h-10 text-purple-600" />
                        </div>
                      </div>
                    )}
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-purple-600 ml-1" />
                      </div>
                    </div>
                    
                    {/* Difficulty badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className={`${difficultyColors[track.difficulty]} border-none`}>
                        {track.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-1 text-gray-800">{track.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{track.artist}</p>
                    
                    {/* Streaming Links */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <StreamingButton
                        url={track.spotify_url}
                        platform="Spotify"
                        icon={Music}
                        color="text-green-600"
                      />
                      <StreamingButton
                        url={track.apple_music_url}
                        platform="Apple"
                        icon={Music}
                        color="text-gray-800"
                      />
                      <StreamingButton
                        url={track.youtube_music_url}
                        platform="YouTube"
                        icon={Play}
                        color="text-red-600"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                      <Mic className="w-4 h-4 mr-2" />
                      Chanter !
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Mic className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aucune chanson disponible</h3>
              <p className="text-gray-600">Les chansons de karaoké seront bientôt disponibles !</p>
            </div>
          )}
        </div>

        {/* YouTube Video Modal */}
        <AnimatePresence>
          {showVideo && selectedTrack && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeKaraoke}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {selectedTrack.album_cover && (
                        <img 
                          src={selectedTrack.album_cover} 
                          alt={selectedTrack.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{selectedTrack.title}</h3>
                        <p className="text-gray-600">{selectedTrack.artist}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeKaraoke}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                {/* YouTube Video */}
                <div className="relative">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedTrack.youtube_video_id}?autoplay=1&rel=0`}
                      title={selectedTrack.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Footer with streaming links */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Écoutez aussi sur :</p>
                      <div className="flex gap-3">
                        <StreamingButton
                          url={selectedTrack.spotify_url}
                          platform="Spotify"
                          icon={Music}
                          color="text-green-600"
                        />
                        <StreamingButton
                          url={selectedTrack.apple_music_url}
                          platform="Apple Music"
                          icon={Music}
                          color="text-gray-800"
                        />
                        <StreamingButton
                          url={selectedTrack.youtube_music_url}
                          platform="YouTube Music"
                          icon={Play}
                          color="text-red-600"
                        />
                      </div>
                    </div>
                    <Badge className={`${difficultyColors[selectedTrack.difficulty]} border-none`}>
                      {selectedTrack.difficulty}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}