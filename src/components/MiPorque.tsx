import { useState } from 'react';
import { ArrowLeft, Sparkles, Target, Lightbulb, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface MiPorqueProps {
  onBack: () => void;
}

export function MiPorque({ onBack }: MiPorqueProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    passion: '',
    problem: '',
    interests: [] as string[],
  });
  const [showConnections, setShowConnections] = useState(false);

  const questions = [
    {
      id: 'passion',
      question: '¿Qué te apasiona?',
      placeholder: 'Ejemplo: Los videojuegos, la música, ayudar a otros, la tecnología...',
      icon: Sparkles,
    },
    {
      id: 'problem',
      question: '¿Qué problema te gustaría resolver en el mundo?',
      placeholder: 'Ejemplo: El cambio climático, la desigualdad, el acceso a la educación...',
      icon: Lightbulb,
    },
  ];

  const interests = [
    'Videojuegos', 'Música', 'Arte', 'Deportes', 'Tecnología',
    'Ciencia', 'Naturaleza', 'Lectura', 'Cocina', 'Fotografía'
  ];

  const connections = {
    'Videojuegos': [
      { subject: 'Física', reason: 'Esencial para la mecánica de juego y movimientos realistas' },
      { subject: 'Matemáticas', reason: 'Base de la programación y algoritmos' },
      { subject: 'Arte', reason: 'Diseño de personajes, escenarios y experiencia visual' },
      { subject: 'Inglés', reason: 'Idioma principal en la industria de videojuegos' },
    ],
    'Música': [
      { subject: 'Matemáticas', reason: 'Ritmos, tiempos y teoría musical' },
      { subject: 'Física', reason: 'Acústica y ondas sonoras' },
      { subject: 'Historia', reason: 'Evolución de los estilos musicales' },
      { subject: 'Literatura', reason: 'Composición de letras y narrativa' },
    ],
    'Tecnología': [
      { subject: 'Matemáticas', reason: 'Fundamento de la programación' },
      { subject: 'Física', reason: 'Electrónica y circuitos' },
      { subject: 'Inglés', reason: 'Documentación y comunicación global' },
      { subject: 'Lógica', reason: 'Resolución de problemas y algoritmos' },
    ],
  };

  const handleAnswerChange = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const handleInterestToggle = (interest: string) => {
    const newInterests = answers.interests.includes(interest)
      ? answers.interests.filter((i) => i !== interest)
      : [...answers.interests, interest];
    setAnswers({ ...answers, interests: newInterests });
  };

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setShowConnections(true);
    }
  };

  const progress = ((step + 1) / (questions.length + 1)) * 100;

  if (showConnections) {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" onClick={onBack} className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Button>

          <Card className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            <CardContent className="p-6">
              <h2 className="text-2xl mb-2">¡Increíble! 🎉</h2>
              <p>Ahora vamos a conectar tus pasiones con lo que estudias en la escuela.</p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {answers.interests.map((interest) => {
              const interestConnections = connections[interest as keyof typeof connections];
              if (!interestConnections) return null;

              return (
                <Card key={interest}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-purple-500" />
                      {interest}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {interestConnections.map((conn, idx) => (
                        <div key={idx} className="flex gap-4 p-4 bg-purple-50 rounded-lg">
                          <BookOpen className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-purple-900">{conn.subject}</p>
                            <p className="text-sm text-gray-600">{conn.reason}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-500" />
                Mi Mapa de Vida
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900 mb-2">🎯 Corto Plazo (Este semestre)</p>
                  <p className="text-sm text-gray-600">Terminar el semestre con buenas calificaciones en las materias que me ayudarán con {answers.interests[0]}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900 mb-2">🚀 Mediano Plazo (1-2 años)</p>
                  <p className="text-sm text-gray-600">Terminar la preparatoria y explorar opciones de carrera relacionadas con {answers.interests.join(', ')}</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-900 mb-2">⭐ Largo Plazo (5+ años)</p>
                  <p className="text-sm text-gray-600">Trabajar en resolver: {answers.problem}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Button variant="ghost" onClick={onBack} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl mb-2">Mi por qué</h1>
          <p className="text-gray-600">Descubre qué te motiva y cómo se conecta con tus estudios</p>
          <Progress value={progress} className="mt-4" />
        </div>

        {step < questions.length ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {(() => {
                  const Icon = questions[step].icon;
                  return Icon ? <Icon className="w-6 h-6 text-purple-500" /> : null;
                })()}
                {questions[step].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder={questions[step].placeholder}
                value={answers[questions[step].id as keyof typeof answers] as string}
                onChange={(e) => handleAnswerChange(questions[step].id, e.target.value)}
                rows={6}
                className="mb-4"
              />
              <Button onClick={handleNext} className="w-full bg-purple-500 hover:bg-purple-600">
                Siguiente
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Selecciona tus intereses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 mb-6">
                {interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant={answers.interests.includes(interest) ? 'default' : 'outline'}
                    className={`cursor-pointer px-4 py-2 ${
                      answers.interests.includes(interest)
                        ? 'bg-purple-500 hover:bg-purple-600'
                        : 'hover:bg-purple-50'
                    }`}
                    onClick={() => handleInterestToggle(interest)}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
              <Button
                onClick={handleNext}
                disabled={answers.interests.length === 0}
                className="w-full bg-purple-500 hover:bg-purple-600"
              >
                Ver conexiones
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
