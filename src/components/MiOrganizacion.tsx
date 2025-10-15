import { ArrowLeft, BookOpen, Beaker, Atom, Star, Play, Calendar, CheckCircle, Trophy, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MiOrganizacionProps {
  onBack: () => void;
}

export function MiOrganizacion({ onBack }: MiOrganizacionProps) {
  const scheduleItems = [
    { 
      day: 'Lun', 
      time: '16:00 - 17:00', 
      subject: 'Matemáticas',
      emoji: '📐',
      color: 'from-purple-400 to-purple-600',
      xp: 25,
      completed: true,
    },
    { 
      day: 'Mar', 
      time: '17:30 - 18:30', 
      subject: 'Física',
      emoji: '⚡',
      color: 'from-blue-400 to-blue-600',
      xp: 30,
      completed: false,
    },
    { 
      day: 'Mié', 
      time: '16:00 - 17:00', 
      subject: 'Química',
      emoji: '🧪',
      color: 'from-cyan-400 to-cyan-600',
      xp: 25,
      completed: false,
    },
    { 
      day: 'Jue', 
      time: '18:00 - 19:00', 
      subject: 'Literatura',
      emoji: '📚',
      color: 'from-pink-400 to-pink-600',
      xp: 20,
      completed: false,
    },
  ];

  const studyTechniques = [
    {
      title: 'Técnica Pomodoro',
      description: '25 min estudio + 5 min descanso',
      duration: '2 min',
      image: 'https://images.unsplash.com/photo-1656259698958-7bcb4e72acc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBwb21vZG9yb3xlbnwxfHx8fDE3NjA1NDQxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      emoji: '🍅',
      xp: 10,
    },
    {
      title: 'Mapas Mentales',
      description: 'Organiza tus ideas visualmente',
      duration: '2 min',
      image: 'https://images.unsplash.com/photo-1758873267213-c20dc5568c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kJTIwbWFwJTIwY29uY2VwdHxlbnwxfHx8fDE3NjA1NDQxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      emoji: '🧠',
      xp: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-b-3xl shadow-lg sticky top-0 z-10">
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
              <h1 className="text-2xl">Mi Organización</h1>
              <p className="text-white/90 text-sm">Planifica tu semana</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-bold">85 XP</span>
            </div>
          </div>

          {/* Weekly Progress */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Progreso semanal</span>
                <span className="text-sm font-bold">1 de 4 sesiones</span>
              </div>
              <Progress value={25} className="h-2 bg-white/20" />
            </div>
          </Card>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-5 space-y-6 pb-8">
        {/* Horario de la Semana */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl text-gray-800">Horario Esta Semana</h2>
          </div>
          
          <div className="space-y-3">
            {scheduleItems.map((item, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover:shadow-lg transition-all ${
                  item.completed ? 'bg-green-50 border-green-200' : 'bg-white'
                }`}
              >
                <div className="flex items-center">
                  {/* Completion Status */}
                  <div className={`w-2 h-full bg-gradient-to-b ${item.color}`} />
                  
                  <div className="flex items-center gap-4 p-4 flex-1">
                    {/* Emoji Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md ${
                      item.completed ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                    }`}>
                      {item.completed ? '✅' : item.emoji}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                          {item.day}
                        </Badge>
                        <span className="text-sm text-gray-600">{item.time}</span>
                      </div>
                      <p className={`font-bold text-gray-800 ${item.completed ? 'line-through text-gray-500' : ''}`}>
                        {item.subject}
                      </p>
                      {item.completed && (
                        <p className="text-sm text-green-600 mt-1">¡Completado! +{item.xp} XP</p>
                      )}
                    </div>

                    {/* XP Badge */}
                    {!item.completed && (
                      <div className="flex flex-col items-center gap-1">
                        <Star className="w-6 h-6 text-yellow-500" />
                        <span className="text-sm font-bold text-gray-700">+{item.xp}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Técnicas de Estudio */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl text-gray-800">Aprende Técnicas de Estudio</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studyTechniques.map((technique, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all hover:scale-105 border-2 border-gray-100">
                <div className="relative aspect-[16/10]">
                  <ImageWithFallback
                    src={technique.image}
                    alt={technique.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform">
                      <Play className="w-8 h-8 text-green-500 ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration & XP */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <Badge className="bg-black/60 text-white border-0">
                      {technique.duration}
                    </Badge>
                    <Badge className="bg-yellow-500 text-white border-0 flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      +{technique.xp} XP
                    </Badge>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{technique.emoji}</span>
                      <h3 className="font-bold text-lg">{technique.title}</h3>
                    </div>
                    <p className="text-sm text-white/90">{technique.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily Streak Bonus */}
        <Card className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0 overflow-hidden relative">
          <div className="absolute top-0 right-0 text-9xl opacity-20">🔥</div>
          <div className="p-6 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold">¡Racha de estudio!</h3>
                <p className="text-white/90 text-sm">Mantén el impulso</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-full p-4 text-center">
              <p className="text-sm mb-1">Estudia 4 días seguidos para ganar</p>
              <p className="text-3xl font-bold">+50 XP BONUS</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
