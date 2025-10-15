import { useState } from 'react';
import { ArrowLeft, Smile, Heart, Wind, AlertCircle, Phone, Headphones, Star, Trophy, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface MiBienestarProps {
  onBack: () => void;
}

type Mood = 'great' | 'good' | 'okay' | 'bad' | 'terrible';

export function MiBienestar({ onBack }: MiBienestarProps) {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [streak, setStreak] = useState(5);

  const moods = [
    { id: 'great' as Mood, emoji: '😊', label: 'Excelente', color: 'from-green-400 to-emerald-500' },
    { id: 'good' as Mood, emoji: '🙂', label: 'Bien', color: 'from-blue-400 to-cyan-500' },
    { id: 'okay' as Mood, emoji: '😐', label: 'Regular', color: 'from-yellow-400 to-amber-500' },
    { id: 'bad' as Mood, emoji: '😔', label: 'Mal', color: 'from-orange-400 to-red-500' },
    { id: 'terrible' as Mood, emoji: '😰', label: 'Muy mal', color: 'from-red-500 to-rose-600' },
  ];

  const resources = {
    great: [
      { title: '¡Increíble!', content: 'Estás en un gran momento. ¡Aprovecha esta energía positiva!', emoji: '🌟', xp: 20 },
      { title: 'Comparte tu alegría', content: 'Tu energía puede inspirar a otros en la comunidad.', emoji: '✨', xp: 15 },
    ],
    good: [
      { title: 'Excelente', content: 'Mantén el ritmo. Estás haciendo un gran trabajo.', emoji: '👍', xp: 15 },
      { title: 'Sigue adelante', content: 'Pequeños pasos diarios crean grandes cambios.', emoji: '🚀', xp: 15 },
    ],
    okay: [
      { title: 'Está bien', content: 'No pasa nada por tener días regulares. Lo importante es continuar.', emoji: '💪', xp: 10 },
      { title: 'Respira hondo', content: 'Una caminata de 5 minutos puede ayudarte.', emoji: '🌿', xp: 10 },
    ],
    bad: [
      { title: 'No estás solo', content: 'Todos tenemos días difíciles. Busca apoyo en tu red.', emoji: '🤗', xp: 10 },
      { title: 'Respira', content: 'Respira profundo: 4 segundos inhala, 4 mantén, 4 exhala.', emoji: '🫁', xp: 10 },
    ],
    terrible: [
      { title: 'Busca ayuda', content: 'Es importante hablar con alguien. Contacta a un orientador.', emoji: '🆘', xp: 10 },
      { title: 'Kit de crisis', content: 'Tenemos herramientas para ayudarte ahora mismo.', emoji: '🛟', xp: 10 },
    ],
  };

  const breathingExercises = [
    { name: '4-7-8 Respiración', description: 'Relaja tu mente en minutos', duration: '2 min', emoji: '🌊', xp: 15 },
    { name: 'Respiración Cuadrada', description: 'Encuentra tu equilibrio', duration: '3 min', emoji: '🔷', xp: 20 },
    { name: 'Respiración Profunda', description: 'Calma profunda', duration: '5 min', emoji: '🧘', xp: 25 },
  ];

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-b-3xl shadow-lg sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onBack} 
              className="rounded-full hover:bg-white/20 text-white"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl">Mi Bienestar</h1>
              <p className="text-white/90 text-sm">Tu salud emocional importa</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-bold">120 XP</span>
            </div>
          </div>

          {/* Streak Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-yellow-300" />
                  <div>
                    <p className="text-sm text-white/80">Racha de check-in</p>
                    <p className="text-2xl font-bold">{streak} días</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/80 mb-1">+{streak * 5} XP ganados</p>
                  <Progress value={(streak / 7) * 100} className="w-24 h-2 bg-white/20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-5 space-y-6 pb-8">
        {/* Daily Check-in */}
        <Card className="border-2 border-green-200 bg-gradient-to-br from-white to-green-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <Smile className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl text-gray-800">¿Cómo te sientes hoy?</h2>
                <p className="text-sm text-gray-600">Comparte tu estado de ánimo</p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3 mb-6">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => handleMoodSelect(mood.id)}
                  className={`p-4 rounded-2xl transition-all transform hover:scale-110 ${
                    selectedMood === mood.id
                      ? `bg-gradient-to-br ${mood.color} shadow-xl scale-110`
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="text-4xl mb-2">{mood.emoji}</div>
                  <p className={`text-xs font-medium ${
                    selectedMood === mood.id ? 'text-white' : 'text-gray-700'
                  }`}>
                    {mood.label}
                  </p>
                </button>
              ))}
            </div>

            {selectedMood && (
              <div className="space-y-3 animate-in fade-in duration-500">
                {resources[selectedMood].map((resource, idx) => (
                  <Card key={idx} className="bg-white border-2 border-green-100 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-3xl">{resource.emoji}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-1">{resource.title}</h3>
                          <p className="text-sm text-gray-600">{resource.content}</p>
                        </div>
                        <Badge className="bg-green-500 text-white border-0 flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          +{resource.xp}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Breathing Exercises */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <Wind className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl text-gray-800">Ejercicios de Respiración</h2>
          </div>

          <div className="space-y-3">
            {breathingExercises.map((exercise, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:scale-105 border-2 border-blue-100">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center text-3xl shadow-md">
                      {exercise.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-1">{exercise.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{exercise.description}</p>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">{exercise.duration}</Badge>
                        <Badge className="bg-blue-500 text-white border-0 flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          +{exercise.xp} XP
                        </Badge>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full shadow-lg">
                      <Headphones className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Crisis Kit */}
        <Card className="bg-gradient-to-br from-red-500 to-rose-600 text-white border-0 overflow-hidden relative">
          <div className="absolute top-0 right-0 text-9xl opacity-10">🆘</div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Kit de Crisis 24/7</h3>
                <p className="text-white/90 text-sm mb-4">
                  Si necesitas ayuda inmediata, estos recursos están disponibles ahora.
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-6 h-6" />
                  <h4 className="font-bold">Línea de Crisis Nacional</h4>
                </div>
                <Button className="w-full bg-white text-red-600 hover:bg-white/90 font-bold h-12">
                  Llamar: 800-123-4567
                </Button>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-6 h-6" />
                  <h4 className="font-bold">Ejercicio 5-4-3-2-1</h4>
                </div>
                <p className="text-sm text-white/90">
                  Técnica rápida para conectar con el presente cuando te sientes abrumado.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Motivational Card */}
        <Card className="bg-gradient-to-r from-purple-400 to-pink-500 text-white border-0">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">💪</div>
            <h3 className="text-xl font-bold mb-2">Eres más fuerte de lo que crees</h3>
            <p className="text-white/90 text-sm">Cada día que registras tu estado de ánimo es un paso hacia el bienestar</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
