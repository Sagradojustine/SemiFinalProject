import React, { useState } from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

export default function LandingPage({ onNavigate }) {
  const [activeButton, setActiveButton] = useState('');

  const handleNavigation = (path, buttonName) => {
    setActiveButton(buttonName);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const journeyCategories = [
    {
      year: '1st Year',
      title: 'New Beginnings',
      icon: '🌱',
      description: 'Starting my college journey filled with excitement and curiosity. Met amazing people, joined clubs, and discovered my passion for learning. Everything felt fresh and full of possibilities!',
      color: 'from-pink-300 to-rose-300'
    },
    {
      year: '2nd Year',
      title: 'Finding My Path',
      icon: '🌸',
      description: 'Explored different subjects and found what truly interests me. Took on leadership roles and faced challenges that helped me grow. Made mistakes but learned valuable lessons from each one.',
      color: 'from-rose-300 to-pink-400'
    },
    {
      year: '3rd Year',
      title: 'Growth & Challenges',
      icon: '💪',
      description: 'Juggled academics, projects, and personal life while staying focused on my goals. Built stronger friendships and learned the importance of balance. This year tested my resilience and determination.',
      color: 'from-pink-400 to-fuchsia-300'
    },
    {
      year: '4th Year',
      title: 'The Final Chapter',
      icon: '✨',
      description: 'My senior year! Making every moment count, cherishing friendships, and preparing for the future. Working on my thesis, attending final events, and creating lasting memories before this beautiful chapter ends.',
      color: 'from-fuchsia-300 to-pink-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Heart className="text-pink-300 w-8 h-8 opacity-40" />
      </div>
      <div className="absolute top-32 right-20 animate-pulse">
        <Star className="text-rose-300 w-6 h-6 opacity-40" />
      </div>
      <div className="absolute bottom-20 left-32 animate-bounce delay-100">
        <Sparkles className="text-fuchsia-300 w-7 h-7 opacity-40" />
      </div>

      {/* Navbar */}
      <nav className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg border-b-4 border-pink-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-pink-500 w-6 h-6" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                My Journey
              </span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleNavigation('/students', 'Student')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeButton === 'Student'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                    : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => handleNavigation('/subjects', 'Subject')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeButton === 'Subject'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                    : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                }`}
              >
                Subject
              </button>
              <button
                onClick={() => handleNavigation('/grades', 'Grade')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeButton === 'Grade'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                    : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                }`}
              >
                Grade
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl ring-4 ring-pink-200">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full p-3 shadow-lg">
              <Star className="text-white w-6 h-6 fill-current" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent">
            [Justine Britney Irish C Sagarado]
          </h1>
          <p className="text-xl text-gray-600 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-500" />
            4th Year Student
            <Sparkles className="w-5 h-5 text-pink-500" />
          </p>
          <div className="inline-block bg-gradient-to-r from-pink-200 to-rose-200 px-6 py-2 rounded-full">
            <p className="text-pink-700 font-medium">Embracing Every Moment ✨</p>
          </div>
        </div>

        {/* 4th Year Journey Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-3">
            <Heart className="text-pink-500 w-8 h-8" />
            My College Journey Through The Years
            <Heart className="text-pink-500 w-8 h-8" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journeyCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-pink-100 hover:border-pink-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-pink-500 uppercase tracking-wide">
                      {category.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="text-center mt-16 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 rounded-3xl p-10 shadow-xl border-4 border-white">
          <p className="text-2xl font-semibold text-gray-700 italic mb-2">
            "Make your senior year unforgettable"
          </p>
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-pink-400 w-5 h-5 fill-current" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
