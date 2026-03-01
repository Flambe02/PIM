import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Puzzle, Gamepad2, Music, Mic, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import QuizWidget from "../components/activities/QuizWidget"; // Added import

const activityIcons = {
  coloriage: Palette,
  "casse-tête": Puzzle,
  jeu: Gamepad2,
  danse: Music,
  karaoké: Mic
};

const difficultyColors = {
  facile: "bg-green-100 text-green-800",
  moyen: "bg-yellow-100 text-yellow-800",
  difficile: "bg-red-100 text-red-800"
};

export default function Activities() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showQuiz, setShowQuiz] = useState(false); // Added state for quiz modal
  const [introPage, setIntroPage] = useState(1);

  useEffect(() => {
    // Simuler un temps de chargement
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handlePrint = (imageUrl) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Imprimer le Coloriage</title>
          <style>
            body { margin: 20px; text-align: center; }
            img { max-width: 100%; height: auto; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
            button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <button class="no-print" onclick="window.print()">Imprimer</button>
          <br/>
          <img src="${imageUrl}" alt="Coloriage à imprimer" />
          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const activities = [
    {
      id: 1,
      title: "Coloriage de Scapin le Farceur",
      type: "coloriage",
      description: "Donne vie à Scapin et à ses célèbres fourberies avec ce coloriage magique par numéros !",
      age_range: "5-10 ans",
      difficulty: "facile",
      instructions: "Utilise les couleurs indiquées pour chaque numéro et découvre Scapin dans toute sa splendeur.",
      image_url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/79ae86c42_Coloriage.png"
    },
    {
      id: 2,
      title: "Puzzle de la Fable 'Le Corbeau et le Renard'",
      type: "casse-tête",
      description: "Reconstitue la scène où le malin renard flatte le corbeau pour lui voler son fromage.",
      age_range: "6-12 ans",
      difficulty: "moyen",
      instructions: "Assemble les pièces du puzzle pour révéler l'illustration de la célèbre fable.",
      image_url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0d3d1718f_Puzzle.png"
    },
    {
      id: 6,
      title: "Quiz des Personnages",
      type: "jeu",
      description: "Sauras-tu reconnaître qui est qui ? Teste tes connaissances sur les héros de nos albums !",
      age_range: "6-12 ans",
      difficulty: "moyen",
      instructions: "Lis la description ou la citation et devine de quel personnage il s'agit.",
      image_url: "/quiz-personnages.png"
    }
  ];

  const categories = ["all", "coloriage", "casse-tête", "jeu"]; // Adjusted categories based on remaining activities
  
  const filteredActivities = selectedCategory === "all" 
    ? activities 
    : activities.filter(activity => activity.type === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-purple-600">Chargement des activités amusantes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>Activités & Jeux Musicaux pour Enfants | Pimentão en Chansons</title>
        <meta name="description" content="Quiz, jeux, coloriages et activités musicales interactives pour les enfants. Testez vos connaissances sur Perrault, La Fontaine et Molière avec Pimentão en Chansons." />
        <link rel="canonical" href="https://pimentao.fr/activities" />
        <meta property="og:title" content="Activités & Jeux Musicaux pour Enfants | Pimentão en Chansons" />
        <meta property="og:url" content="https://pimentao.fr/activities" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-8" style={{textAlign: 'center'}}>
            Activités et Jeux Musicaux pour Enfants
          </h1>
          <div className="activities-introduction bg-white/80 shadow rounded-xl py-5 px-4 md:px-8 mx-auto max-w-6xl mb-6 border border-purple-100">
            <h2 className="text-lg md:text-xl font-semibold text-purple-600 mb-3">Prolongez l'aventure avec nos activités créatives !</h2>
            <div className="max-w-3xl mx-auto">
              {introPage === 1 ? (
                <>
                  <p className="text-base text-gray-700 leading-normal mb-2">
                    L'écoute est un merveilleux début, mais l'apprentissage devient inoubliable quand il passe par le jeu. C'est pourquoi nous avons créé cet espace d'activités, conçu pour permettre aux enfants de prolonger la magie de nos chansons. Chaque jeu, quiz ou coloriage est une nouvelle occasion d'explorer, de créer et de grandir tout en s'amusant.
                  </p>
                  <p className="text-base text-gray-700 leading-normal mb-2">
                    Ici, l'imagination est reine ! Nos activités sont directement inspirées des personnages et des histoires de nos albums. Elles sont pensées pour stimuler la créativité, affiner la mémoire et renforcer les connaissances de manière ludique.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-base text-gray-700 leading-normal mb-2">
                    Que ce soit en testant sa connaissance des contes avec un quiz ou en donnant vie à ses héros préférés avec des crayons de couleur, votre enfant continue de tisser un lien unique avec notre univers.
                  </p>
                  <p className="text-base text-gray-700 leading-normal">
                    Choisissez une activité ci-dessous et lancez-vous ! C'est le moment de partager un moment de complicité en famille, de rire et de voir les leçons de nos chansons prendre forme sous les yeux et les mains de vos enfants.
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'hover:bg-purple-50 hover:text-purple-600 hover:scale-105'
              }`}
            >
              {category === "all" ? "Toutes les activités" : category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
            </Button>
          ))}
        </div>

        {/* Quiz Modal */}
        {showQuiz && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl p-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowQuiz(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-lg"
              >
                ✕
              </Button>
              <QuizWidget />
            </div>
          </div>
        )}

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, index) => {
            const IconComponent = activityIcons[activity.type] || Star;
            
            return (
              <Card 
                key={activity.id || index} 
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group"
              >
                {/* Image d'aperçu si disponible */}
                {activity.image_url && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={activity.image_url}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Header pour les activités sans image */}
                {!activity.image_url && (
                  <CardHeader className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-800 pr-16">
                      {activity.title}
                    </CardTitle>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline" className="bg-white/60">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.age_range}
                      </Badge>
                      <Badge className={`${difficultyColors[activity.difficulty]} border-none`}>
                        {activity.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                )}

                <CardContent className="p-6">
                  {/* Titre et badges pour les activités avec image */}
                  {activity.image_url && (
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-white/60">
                          <Clock className="w-3 h-3 mr-1" />
                          {activity.age_range}
                        </Badge>
                        <Badge className={`${difficultyColors[activity.difficulty]} border-none`}>
                          {activity.difficulty}
                        </Badge>
                      </div>
                    </div>
                  )}

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {activity.description}
                  </p>

                  {activity.instructions && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Comment jouer:</span> {activity.instructions}
                      </p>
                    </div>
                  )}

                  {activity.id === 6 ? (
                    <Button
                      onClick={() => setShowQuiz(true)} // Changed to open modal
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Commencer le quiz
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => {
                        if (activity.image_url) {
                          handlePrint(activity.image_url);
                        }
                      }}
                    >
                      {activity.image_url ? "Imprimer l'activité" : "Démarrer l'activité"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Promotion Blog */}
        <div className="max-w-3xl mx-auto mt-16 mb-8">
          <div className="rounded-3xl bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 shadow-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
              Envie de plus d'idées ?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Retrouvez des conseils, des inspirations et des astuces pour l'éveil musical dans nos albums.
            </p>
            <a
              href="/albums"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform"
            >
              Découvrir les albums
            </a>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Plus de plaisir à venir !
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Nous créons toujours de nouvelles activités et de nouveaux jeux pour notre famille des Chansons de l'Arc-en-ciel
            </p>
            <div className="flex justify-center">
              <div className="flex -space-x-2">
                {['🎨', '🧩', '🎵', '💃', '🎤', '🌈'].map((emoji, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
