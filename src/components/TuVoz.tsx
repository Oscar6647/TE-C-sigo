import { useState } from 'react';
import { ArrowLeft, MessageSquare, BarChart3, Send, ThumbsUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface TuVozProps {
  onBack: () => void;
}

export function TuVoz({ onBack }: TuVozProps) {
  const [surveyStep, setSurveyStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const surveyQuestions = [
    {
      id: 'satisfaction',
      question: '¿Qué tan satisfecho estás con tu experiencia escolar actual?',
      type: 'scale',
      options: ['Muy insatisfecho', 'Insatisfecho', 'Neutral', 'Satisfecho', 'Muy satisfecho'],
    },
    {
      id: 'change',
      question: '¿Qué cambiarías de tu escuela?',
      type: 'text',
      placeholder: 'Comparte tus ideas para mejorar la escuela...',
    },
    {
      id: 'useless',
      question: '¿Hay alguna materia que sientas que es menos útil? ¿Por qué?',
      type: 'text',
      placeholder: 'Tu opinión nos ayuda a mejorar el programa académico...',
    },
    {
      id: 'support',
      question: '¿Qué tipo de apoyo adicional te gustaría recibir?',
      type: 'multiple',
      options: [
        'Más tutorías',
        'Apoyo psicológico',
        'Orientación vocacional',
        'Apoyo económico',
        'Actividades extracurriculares',
      ],
    },
  ];

  const stats = [
    {
      title: 'Estudiantes participantes',
      value: '1,234',
      change: '+15% este mes',
      color: 'text-blue-600',
    },
    {
      title: 'Sugerencias implementadas',
      value: '47',
      change: 'En los últimos 6 meses',
      color: 'text-green-600',
    },
    {
      title: 'Satisfacción promedio',
      value: '3.8/5',
      change: '+0.3 desde el año pasado',
      color: 'text-purple-600',
    },
  ];

  const recentChanges = [
    {
      title: 'Nuevo horario de biblioteca',
      description: 'Abierta hasta las 8pm los días de semana',
      votes: 234,
      status: 'Implementado',
    },
    {
      title: 'Más opciones vegetarianas en cafetería',
      description: 'Menú actualizado con opciones saludables',
      votes: 189,
      status: 'Implementado',
    },
    {
      title: 'Wifi mejorado en todo el campus',
      description: 'Mayor velocidad y cobertura',
      votes: 312,
      status: 'En progreso',
    },
    {
      title: 'Programa de mentoría',
      description: 'Estudiantes mayores ayudando a nuevos estudiantes',
      votes: 156,
      status: 'En revisión',
    },
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (surveyStep < surveyQuestions.length - 1) {
      setSurveyStep(surveyStep + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handlePrevious = () => {
    if (surveyStep > 0) {
      setSurveyStep(surveyStep - 1);
    }
  };

  const progress = ((surveyStep + 1) / surveyQuestions.length) * 100;

  if (submitted) {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" onClick={onBack} className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Button>

          <Card className="border-green-500 border-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl mb-2">¡Gracias por tu participación!</h2>
              <p className="text-gray-600 mb-6">
                Tu voz es muy importante para nosotros. Revisaremos tus comentarios y los 
                compartiremos de forma anónima con la dirección de la escuela.
              </p>
              <Button onClick={() => { setSubmitted(false); setSurveyStep(0); setAnswers({}); }}>
                Responder otra encuesta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Button variant="ghost" onClick={onBack} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl mb-2">Tu Voz Cuenta</h1>
          <p className="text-gray-600">Comparte tu opinión y ayuda a mejorar tu escuela</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                  Encuesta Actual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Pregunta {surveyStep + 1} de {surveyQuestions.length}
                    </span>
                    <span className="text-sm font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} />
                </div>

                <div className="mb-6">
                  <h3 className="text-lg mb-4">{surveyQuestions[surveyStep].question}</h3>

                  {surveyQuestions[surveyStep].type === 'scale' && (
                    <RadioGroup
                      value={answers[surveyQuestions[surveyStep].id]}
                      onValueChange={(value) => handleAnswer(surveyQuestions[surveyStep].id, value)}
                    >
                      <div className="space-y-3">
                        {surveyQuestions[surveyStep].options?.map((option, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                            <RadioGroupItem value={option} id={`option-${idx}`} />
                            <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  )}

                  {surveyQuestions[surveyStep].type === 'text' && (
                    <Textarea
                      placeholder={surveyQuestions[surveyStep].placeholder}
                      value={answers[surveyQuestions[surveyStep].id] || ''}
                      onChange={(e) => handleAnswer(surveyQuestions[surveyStep].id, e.target.value)}
                      rows={6}
                    />
                  )}

                  {surveyQuestions[surveyStep].type === 'multiple' && (
                    <div className="space-y-3">
                      {surveyQuestions[surveyStep].options?.map((option, idx) => (
                        <div
                          key={idx}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            answers[surveyQuestions[surveyStep].id]?.includes(option)
                              ? 'bg-blue-50 border-blue-500'
                              : 'hover:bg-gray-50'
                          }`}
                          onClick={() => {
                            const current = answers[surveyQuestions[surveyStep].id] || '';
                            const options = current ? current.split(',') : [];
                            const newOptions = options.includes(option)
                              ? options.filter((o) => o !== option)
                              : [...options, option];
                            handleAnswer(surveyQuestions[surveyStep].id, newOptions.join(','));
                          }}
                        >
                          <Label className="cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  {surveyStep > 0 && (
                    <Button variant="outline" onClick={handlePrevious}>
                      Anterior
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    disabled={!answers[surveyQuestions[surveyStep].id]}
                    className="gap-2 flex-1"
                  >
                    {surveyStep < surveyQuestions.length - 1 ? 'Siguiente' : 'Enviar'}
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                  Impacto de Tu Voz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className={`text-2xl ${stat.color} mb-1`}>{stat.value}</p>
                      <p className="text-xs text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-xs text-gray-500">{stat.change}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900">
                    💙 Las respuestas se comparten de forma anónima y agregada con la dirección de la escuela 
                    para implementar mejoras reales.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cambios Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentChanges.map((change, idx) => (
                    <div key={idx} className="pb-4 border-b last:border-b-0 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{change.title}</h4>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            change.status === 'Implementado'
                              ? 'bg-green-50 text-green-700 border-green-200'
                              : change.status === 'En progreso'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : 'bg-gray-50 text-gray-700'
                          }`}
                        >
                          {change.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{change.description}</p>
                      <p className="text-xs text-gray-500">👍 {change.votes} votos</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">¿Tienes una idea?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Comparte tus sugerencias en la comunidad y vota por las ideas de otros estudiantes.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Proponer una idea
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
