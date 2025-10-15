import { Heart, Target, Calendar, Users, Smile, BookOpen, MessageSquare, Flame, Trophy, Star, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { View } from '../App';

interface DashboardProps {
  onNavigate: (view: View) => void;
  user: { matricula: string } | null;
  onLogout: () => void;
}

export function Dashboard({ onNavigate, user, onLogout }: DashboardProps) {
  const sections = [
    {
      id: 'mi-porque' as View,
      title: 'Mi por qué',
      description: 'Descubre tu motivación',
      icon: Heart,
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      emoji: '💖',
    },
    {
      id: 'organizacion' as View,
      title: 'Mi Organización',
      description: 'Planifica tu éxito',
      icon: Calendar,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      emoji: '📅',
    },
    {
      id: 'red-apoyo' as View,
      title: 'Red de Apoyo',
      description: 'Tu comunidad',
      icon: Users,
      color: 'from-purple-400 to-indigo-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      emoji: '👥',
    },
    {
      id: 'bienestar' as View,
      title: 'Mi Bienestar',
      description: 'Cuida tu mente',
      icon: Smile,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      emoji: '😊',
    },
    {
      id: 'recursos' as View,
      title: 'Recursos',
      description: 'Becas y tutorías',
      icon: BookOpen,
      color: 'from-orange-400 to-amber-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      emoji: '📚',
    },
    {
      id: 'tu-voz' as View,
      title: 'Tu Voz Cuenta',
      description: 'Opina y mejora',
      icon: MessageSquare,
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      emoji: '💬',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                👤
              </div>
              <div>
                <h1 className="text-2xl">¡Hola!</h1>
                <p className="text-white/90 text-sm">{user?.matricula}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Flame className="w-5 h-5 text-orange-300" />
                <span className="font-bold">12</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Trophy className="w-5 h-5 text-yellow-300" />
                <span className="font-bold">450</span>
              </div>
            </div>
          </div>

          {/* Streak Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">Racha actual</p>
                  <p className="text-3xl flex items-center gap-2">
                    <Flame className="w-8 h-8 text-orange-400" />
                    <span>12 días</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-sm mb-1">Próximo logro</p>
                  <div className="flex items-center gap-2">
                    <Progress value={60} className="w-24 h-2" />
                    <span className="text-sm">15 días</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6">
        {/* Daily Goal */}
        <Card className="mb-6 border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Meta Diaria</h3>
                  <p className="text-sm text-gray-600">3 de 5 actividades completadas</p>
                </div>
              </div>
              <div className="text-3xl">🎯</div>
            </div>
            <Progress value={60} className="h-3 mb-2" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">¡Sigue así!</span>
              <span className="text-green-600 font-bold">+30 XP</span>
            </div>
          </CardContent>
        </Card>

        {/* Sections Grid */}
        <h2 className="text-2xl mb-4 text-gray-800">Explora tus herramientas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {sections.map((section) => (
            <Card
              key={section.id}
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-gray-100 hover:border-gray-200"
              onClick={() => onNavigate(section.id)}
            >
              <div className={`bg-gradient-to-br ${section.color} p-6 relative`}>
                <div className="absolute top-2 right-2 text-4xl opacity-50">
                  {section.emoji}
                </div>
                <h3 className="text-xl text-white mb-1 relative z-10">{section.title}</h3>
                <p className="text-white/90 text-sm relative z-10">{section.description}</p>
              </div>
              <CardContent className="p-4 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Toca para entrar</span>
                  <Zap className="w-5 h-5 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <Card className="mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <h3 className="text-xl text-gray-800">Logros Recientes</h3>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: '🔥', name: 'Racha 7 días', unlocked: true },
                { icon: '📚', name: '10 horas', unlocked: true },
                { icon: '🎯', name: 'Meta cumplida', unlocked: true },
                { icon: '🌟', name: 'Próximamente', unlocked: false },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl text-center ${
                    achievement.unlocked
                      ? 'bg-white shadow-lg border-2 border-yellow-300'
                      : 'bg-gray-100 opacity-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <p className="text-xs text-gray-700">{achievement.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Star, value: '450', label: 'XP Total', color: 'text-yellow-500', bg: 'bg-yellow-50' },
            { icon: Flame, value: '12', label: 'Días racha', color: 'text-orange-500', bg: 'bg-orange-50' },
            { icon: Trophy, value: '8', label: 'Logros', color: 'text-purple-500', bg: 'bg-purple-50' },
            { icon: Target, value: '5', label: 'Metas activas', color: 'text-green-500', bg: 'bg-green-50' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className={`p-4 text-center ${stat.bg}`}>
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <p className="text-2xl mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
