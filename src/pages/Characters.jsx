import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Mic } from "lucide-react";

export default function Characters() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement pour afficher le spinner
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Les vrais personnages de vos albums
  const characters = [
    {
      id: 1,
      name: "Scapin le Farceur",
      song_title: "C'est moi Scapin !",
      personality: "Malin, rapide, rusé et toujours en mouvement. Il saute, il grimpe, il s'échappe !",
      musical_role: "Il apporte du rythme, du rire et de la magie théâtrale. C'est le roi du swing gitan dans l'album.",
      fun_fact: "Peut résoudre n'importe quel problème… avec un déguisement et un sac de farine.",
      favorite_activity: "Inventer des mensonges si drôles qu'ils finissent par devenir des vérités.",
      emoji: "🎭",
      color: "orange"
    },
    {
      id: 2,
      name: "Agnès la Maligne",
      song_title: "Je suis pas une poupée",
      personality: "Timide au début, mais de plus en plus libre et brillante.",
      musical_role: "Elle représente l'émancipation, la curiosité et l'intelligence des filles dans l'album. Sa chanson est espiègle, légère et inspirante.",
      fun_fact: "Elle a lu un seul livre… et ça lui a suffi pour comprendre le monde !",
      favorite_activity: "Courir dans la rue pour suivre son propre cœur.",
      emoji: "👑",
      color: "pink"
    },
    {
      id: 3,
      name: "Tartuffe le Trompeur",
      song_title: "Tartuffe, le faux dévot",
      personality: "Hypocrite professionnel, charmeur rusé mais très drôle.",
      musical_role: "Il introduit le mensonge comique et la ruse dans l'album. Sa chanson est ironique, swing et pleine de sous-entendus.",
      fun_fact: "Il peut faire croire qu'il est sage… même quand il vole le dessert !",
      favorite_activity: "Se cacher derrière de belles paroles pour obtenir tout ce qu'il veut.",
      emoji: "😈",
      color: "purple"
    },
    {
      id: 4,
      name: "Cendrillon l'Éclair",
      song_title: "Cendrillon",
      personality: "Douce, patiente, courageuse et toujours pleine d'espoir.",
      musical_role: "Elle incarne la magie simple, la patience récompensée et le rêve lucide. Sa chanson est une ballade brillante et délicate.",
      fun_fact: "Peut danser sans jamais perdre sa chaussure… sauf quand elle le décide.",
      favorite_activity: "Les nuits étoilées, les robes qui brillent, et les gens qui croient en elle.",
      emoji: "🥿",
      color: "blue"
    },
    {
      id: 5,
      name: "Peau d'Âne la Cachée",
      song_title: "Peau d'Âne",
      personality: "Intelligente, timide, indépendante et très rusée.",
      musical_role: "Elle introduit la métaphore, le mystère et l'élégance dans l'album. Sa chanson a un ton poétique, presque féerique.",
      fun_fact: "Concocte les meilleures tartes du royaume… avec un bijou caché dedans !",
      favorite_activity: "Lire sous les arbres, rêver en cuisinant, et disparaître dans un nuage de farine.",
      emoji: "👗",
      color: "yellow"
    },
    {
      id: 6,
      name: "Le Loup des Bois",
      song_title: "Le Petit Chaperon Rouge",
      personality: "Duo contrasté : une enfant curieuse et gentille, et un loup rusé mais un peu maladroit.",
      musical_role: "Leur chanson joue sur le suspense, le comique et la peur contrôlée, idéale pour captiver les enfants.",
      fun_fact: "Le Loup adore chanter des berceuses… pour mieux endormir sa proie.",
      favorite_activity: "Les petits paniers, les chemins qui bifurquent, et les grands yeux.",
      emoji: "🐺",
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      purple: "from-purple-400 to-purple-600",
      blue: "from-blue-400 to-blue-600",
      green: "from-green-400 to-green-600",
      orange: "from-orange-400 to-orange-600",
      pink: "from-pink-400 to-pink-600",
      yellow: "from-yellow-400 to-yellow-600",
      red: "from-red-400 to-red-600"
    };
    return colorMap[color] || "from-gray-400 to-gray-600";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-purple-600">Rencontre de nos amis magiques...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Nos Personnages Enchantés
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les héros hauts en couleur de nos albums de contes et de théâtre !
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <Card 
              key={character.id} 
              className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group"
            >
              {/* Character Avatar */}
              <div className={`h-56 bg-gradient-to-br ${getColorClasses(character.color)} relative overflow-hidden flex items-center justify-center`}>
                  <span className="text-8xl text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110">{character.emoji}</span>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {character.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-purple-600 font-semibold mb-4">
                    <Mic className="w-4 h-4"/>
                    <span>{character.song_title}</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed italic">
                  "{character.personality}"
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {character.musical_role}
                </p>

                {character.fun_fact && (
                  <div className="mb-3">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                      <p className="text-sm font-medium text-yellow-800">
                        <span className="font-bold">Fait Amusant:</span> {character.fun_fact}
                      </p>
                    </div>
                  </div>
                )}

                {character.favorite_activity && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                    <p className="text-sm font-medium text-green-800">
                      <span className="font-bold">Adore:</span> {character.favorite_activity}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Retrouvez-les en musique !
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Écoutez leurs aventures dans nos albums "Molière en Chansons" et "Il était une chanson".
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Scapin', 'Agnès', 'Tartuffe', 'Cendrillon', 'Peau d\'Âne', 'Le Loup'].map((name, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="text-lg px-4 py-2 bg-white/60 hover:bg-white/80 transition-colors cursor-pointer"
                >
                  {name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}