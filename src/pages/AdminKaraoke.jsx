import React, { useState, useEffect } from "react";
import { KaraokeTrack } from "@/api/entities";
import { User } from "@/api/entities";
import { AppSettings } from "@/api/entities"; // Added import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, Music, Loader2, PlusCircle, ExternalLink } from "lucide-react";

export default function AdminKaraoke() {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingTrack, setEditingTrack] = useState(null);
  
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [difficulty, setDifficulty] = useState("Facile");
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const [albumCover, setAlbumCover] = useState("");
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [appleMusicUrl, setAppleMusicUrl] = useState("");
  const [youtubeMusicUrl, setYoutubeMusicUrl] = useState("");

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const [bonusSongUrl, setBonusSongUrl] = useState(""); // New state variable
  const [bonusMessage, setBonusMessage] = useState(""); // New state variable

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await User.me();
        if (currentUser.role !== 'admin') {
          setUser(null);
        } else {
          setUser(currentUser);
          loadTracks();
          loadBonusSongUrl(); // Call new function
        }
      } catch (e) {
         setUser(null);
      }
      setIsLoading(false);
    };
    checkUser();
  }, []);

  const loadTracks = async () => {
    const fetchedTracks = await KaraokeTrack.list();
    setTracks(fetchedTracks);
  };

  // New function to load bonus song URL
  const loadBonusSongUrl = async () => {
    try {
      const settings = await AppSettings.filter({ setting_key: "quiz_bonus_song_url" });
      if (settings.length > 0) {
        setBonusSongUrl(settings[0].setting_value);
      }
    } catch (error) {
      console.error("Error loading bonus song URL:", error);
    }
  };

  // New function to update bonus song URL
  const updateBonusSongUrl = async () => {
    try {
      const settings = await AppSettings.filter({ setting_key: "quiz_bonus_song_url" });
      if (settings.length > 0) {
        await AppSettings.update(settings[0].id, { setting_value: bonusSongUrl });
      } else {
        await AppSettings.create({ setting_key: "quiz_bonus_song_url", setting_value: bonusSongUrl });
      }
      setBonusMessage("URL de la chanson bonus mise à jour avec succès !");
      setTimeout(() => setBonusMessage(""), 3000);
    } catch (error) {
      console.error("Error updating bonus song URL:", error);
      setBonusMessage("Erreur lors de la mise à jour.");
    }
  };

  const resetForm = () => {
    setTitle("");
    setArtist("");
    setDifficulty("Facile");
    setYoutubeVideoId("");
    setAlbumCover("");
    setSpotifyUrl("");
    setAppleMusicUrl("");
    setYoutubeMusicUrl("");
    setEditingTrack(null);
    setMessage("");
  };

  const extractYouTubeId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !artist || !youtubeVideoId) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setIsSubmitting(true);
    setMessage("");

    try {
      const trackData = { 
        title, 
        artist, 
        difficulty, 
        youtube_video_id: extractYouTubeId(youtubeVideoId),
        album_cover: albumCover,
        spotify_url: spotifyUrl,
        apple_music_url: appleMusicUrl,
        youtube_music_url: youtubeMusicUrl
      };

      if (editingTrack) {
        await KaraokeTrack.update(editingTrack.id, trackData);
        setMessage("Piste mise à jour avec succès !");
      } else {
        await KaraokeTrack.create(trackData);
        setMessage("Piste ajoutée avec succès !");
      }

      resetForm();
      loadTracks();
    } catch (error) {
      console.error("Error submitting track:", error);
      setMessage("Une erreur s'est produite.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (track) => {
    setEditingTrack(track);
    setTitle(track.title);
    setArtist(track.artist);
    setDifficulty(track.difficulty);
    setYoutubeVideoId(track.youtube_video_id);
    setAlbumCover(track.album_cover || "");
    setSpotifyUrl(track.spotify_url || "");
    setAppleMusicUrl(track.apple_music_url || "");
    setYoutubeMusicUrl(track.youtube_music_url || "");
    setMessage("");
  };
  
  const handleDelete = async (trackId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette piste ?")) {
      try {
        await KaraokeTrack.delete(trackId);
        setMessage("Piste supprimée avec succès !");
        loadTracks();
      } catch (error) {
        console.error("Error deleting track:", error);
        setMessage("Impossible de supprimer la piste.");
      }
    }
  };

  const difficultyColors = {
    "Facile": "bg-green-100 text-green-800",
    "Moyen": "bg-yellow-100 text-yellow-800",
    "Difficile": "bg-red-100 text-red-800"
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }
  
  if (!user) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600">Accès non autorisé</h1>
        <p>Cette page est réservée aux administrateurs.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gradient mb-8">Administration Karaoké</h1>
      
      {message && (
        <div className={`mb-6 p-4 rounded-lg ${message.includes('succès') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message}
        </div>
      )}

      {bonusMessage && (
        <div className={`mb-6 p-4 rounded-lg ${bonusMessage.includes('succès') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {bonusMessage}
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Bonus Song Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="w-6 h-6 text-yellow-600"/>
              Configuration Chanson Bonus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">URL de la chanson bonus (Quiz des personnages)</label>
                <Input 
                  placeholder="https://open.spotify.com/playlist/..." 
                  value={bonusSongUrl} 
                  onChange={(e) => setBonusSongUrl(e.target.value)} 
                />
                <p className="text-xs text-gray-500 mt-1">
                  Cette chanson sera offerte aux joueurs qui obtiennent 7/9 ou plus au quiz
                </p>
              </div>
              <Button onClick={updateBonusSongUrl} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                Mettre à jour la chanson bonus
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Form Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlusCircle className="w-6 h-6 text-purple-600"/>
              {editingTrack ? "Modifier la piste" : "Ajouter une nouvelle piste"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Titre de la chanson *</label>
                <Input 
                  placeholder="Titre de la chanson" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Artiste / Album *</label>
                <Input 
                  placeholder="Artiste / Album" 
                  value={artist} 
                  onChange={(e) => setArtist(e.target.value)} 
                  required 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Difficulté</label>
                <Select onValueChange={setDifficulty} value={difficulty}>
                  <SelectTrigger><SelectValue placeholder="Difficulté" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Facile">Facile</SelectItem>
                    <SelectItem value="Moyen">Moyen</SelectItem>
                    <SelectItem value="Difficile">Difficile</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">URL ou ID de la vidéo YouTube *</label>
                <Input 
                  placeholder="https://www.youtube.com/watch?v=... ou ID direct" 
                  value={youtubeVideoId} 
                  onChange={(e) => setYoutubeVideoId(e.target.value)} 
                  required 
                />
                <p className="text-xs text-gray-500 mt-1">
                  Copiez l'URL complète YouTube ou juste l'ID de la vidéo
                </p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">URL de la pochette d'album</label>
                <Input 
                  placeholder="https://example.com/album-cover.jpg" 
                  value={albumCover} 
                  onChange={(e) => setAlbumCover(e.target.value)} 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">URL Spotify</label>
                <Input 
                  placeholder="https://open.spotify.com/track/..." 
                  value={spotifyUrl} 
                  onChange={(e) => setSpotifyUrl(e.target.value)} 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">URL Apple Music</label>
                <Input 
                  placeholder="https://music.apple.com/..." 
                  value={appleMusicUrl} 
                  onChange={(e) => setAppleMusicUrl(e.target.value)} 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">URL YouTube Music</label>
                <Input 
                  placeholder="https://music.youtube.com/..." 
                  value={youtubeMusicUrl} 
                  onChange={(e) => setYoutubeMusicUrl(e.target.value)} 
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                 <Button type="submit" disabled={isSubmitting} className="flex-1">
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2"/> : null}
                  {editingTrack ? "Mettre à jour" : "Ajouter la piste"}
                </Button>
                {editingTrack && (
                  <Button variant="outline" onClick={resetForm} type="button">
                    Annuler
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Tracks List */}
      <Card className="mt-8"> {/* Adjusted margin-top for separation */}
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="w-6 h-6 text-pink-600"/>
            Pistes existantes ({tracks.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {tracks.length > 0 ? tracks.map(track => (
              <div key={track.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {track.album_cover && (
                    <img 
                      src={track.album_cover} 
                      alt={track.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-800">{track.title}</p>
                    <p className="text-sm text-gray-500">{track.artist}</p>
                    <Badge className={`${difficultyColors[track.difficulty]} border-none text-xs`}>
                      {track.difficulty}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleEdit(track)}
                    title="Modifier"
                  >
                    <Edit className="w-4 h-4"/>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleDelete(track.id)}
                    title="Supprimer"
                  >
                    <Trash2 className="w-4 h-4 text-red-500"/>
                  </Button>
                </div>
              </div>
            )) : (
              <p className="text-gray-500 text-center py-8">Aucune piste de karaoké trouvée.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
