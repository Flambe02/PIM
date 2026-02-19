import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Music, Users, Star, Award, Sparkles } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function About() {
  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>À Propos | Pimentão en Chansons - Musique pour Enfants</title>
        <meta name="description" content="Découvrez Pimentão en Chansons : un projet musical qui réinvente Perrault, La Fontaine et Molière pour les enfants. Une musique éducative, ludique et de qualité professionnelle." />
        <link rel="canonical" href="https://www.pimentao.fr/about" />
        <meta property="og:title" content="À Propos | Pimentão en Chansons" />
        <meta property="og:url" content="https://www.pimentao.fr/about" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-8" style={{textAlign: 'center'}}>
            À Propos de Nos Chansons
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des chansons inspirées des grands classiques pour éveiller les jeunes esprits, nourrir l'imaginaire et transmettre en douceur les leçons de la vie.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-8 text-white text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Notre Mission</h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                Éveiller les jeunes esprits et nourrir leur imaginaire avec des chansons inspirées des grands classiques, pour transmettre en douceur les plus belles leçons de la vie.
              </p>
            </div>
          </Card>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gradient mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                L'aventure a commencé avec une idée simple : transformer les grands classiques de la littérature que nous aimons tant en expériences musicales pour les enfants d'aujourd'hui. Nous sommes une équipe de musiciens, d'auteurs et de parents passionnés.
              </p>
              <p>
                De Perrault à La Fontaine, en passant par Molière, chaque album est une porte d'entrée vers un univers riche en poésie, en sagesse et en émotions. Nous créons des mélodies joyeuses et des arrangements soignés pour que l'apprentissage devienne un plaisir partagé en famille.
              </p>
              <Card className="border-none shadow-lg bg-gradient-to-br from-yellow-50 to-pink-50 mt-8">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-yellow-700 mb-2">Le créateur derrière le projet</h4>
                    <p className="text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                      Je m'appelle Florent Lambert. J'ai imaginé ce projet par passion, avec la conviction profonde que la musique est le plus beau vecteur d'émotions et d'apprentissage. Mon objectif est de proposer des contenus de grande qualité, qui allient exigence artistique et joie de la découverte.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Éveil Culturel</h3>
                </div>
                <p className="text-gray-600">
                  Une initiation ludique aux chefs-d'œuvre de la littérature française.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Pour Toute la Famille</h3>
                </div>
                <p className="text-gray-600">
                  Des chansons que les parents apprécient autant que les enfants, pour des moments de complicité.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Production de Qualité</h3>
                </div>
                <p className="text-gray-600">
                  Une musique soignée et des voix captivantes pour une expérience d'écoute optimale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gradient text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: "Le Plaisir d'Apprendre",
                description: "Nous croyons que la musique est le meilleur moyen de découvrir, de s'émerveiller et de retenir.",
                color: "purple"
              },
              {
                icon: Heart,
                title: "La Transmission",
                description: "Partager la richesse de notre patrimoine culturel de manière accessible et joyeuse.",
                color: "pink"
              },
              {
                icon: Star,
                title: "L'Imagination",
                description: "Stimuler la créativité des enfants en leur offrant des histoires qui font rêver et réfléchir.",
                color: "blue"
              }
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-${value.color}-100 rounded-full flex items-center justify-center`}>
                    <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}