import { useState } from 'react';
import { ArrowLeft, DollarSign, Users, BookOpen, Search, ExternalLink, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';

interface RecursosProps {
  onBack: () => void;
}

export function Recursos({ onBack }: RecursosProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const scholarships = [
    {
      id: 1,
      name: 'Beca de Excelencia Académica',
      amount: '$5,000 MXN/semestre',
      requirements: 'Promedio mínimo de 9.0',
      deadline: '30 de Octubre, 2025',
      type: 'Académica',
    },
    {
      id: 2,
      name: 'Apoyo Económico Gubernamental',
      amount: '$3,000 MXN/bimestre',
      requirements: 'Situación económica vulnerable',
      deadline: '15 de Noviembre, 2025',
      type: 'Económica',
    },
    {
      id: 3,
      name: 'Beca Deportiva',
      amount: '$2,500 MXN/semestre',
      requirements: 'Participación activa en deportes escolares',
      deadline: '20 de Octubre, 2025',
      type: 'Deportiva',
    },
    {
      id: 4,
      name: 'Beca de Manutención',
      amount: '$4,000 MXN/semestre',
      requirements: 'Comprobante de bajos ingresos familiares',
      deadline: '1 de Noviembre, 2025',
      type: 'Económica',
    },
  ];

  const tutors = [
    {
      id: 1,
      name: 'Ana Rodríguez',
      semester: '6to Semestre',
      subjects: ['Matemáticas', 'Física'],
      avatar: 'AR',
      rating: 4.8,
      sessions: 24,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      semester: '5to Semestre',
      subjects: ['Química', 'Biología'],
      avatar: 'CM',
      rating: 4.9,
      sessions: 18,
      color: 'bg-green-500',
    },
    {
      id: 3,
      name: 'Laura Jiménez',
      semester: '6to Semestre',
      subjects: ['Literatura', 'Historia'],
      avatar: 'LJ',
      rating: 4.7,
      sessions: 32,
      color: 'bg-purple-500',
    },
    {
      id: 4,
      name: 'Miguel Torres',
      semester: '5to Semestre',
      subjects: ['Inglés', 'Francés'],
      avatar: 'MT',
      rating: 4.6,
      sessions: 15,
      color: 'bg-orange-500',
    },
  ];

  const workStudyTips = [
    {
      title: 'Organiza tu tiempo con bloques',
      description: 'Dedica bloques específicos de tiempo para trabajo y estudio. Evita mezclarlos.',
      icon: '⏰',
    },
    {
      title: 'Comunica tu situación',
      description: 'Habla con tus profesores sobre tu necesidad de trabajar. Muchos pueden ser flexibles.',
      icon: '💬',
    },
    {
      title: 'Aprovecha los fines de semana',
      description: 'Usa el fin de semana para adelantar tareas y proyectos de la semana.',
      icon: '📅',
    },
    {
      title: 'Busca trabajos flexibles',
      description: 'Trabajos de medio tiempo con horarios flexibles son ideales para estudiantes.',
      icon: '💼',
    },
    {
      title: 'No te sobrecargues',
      description: 'Es importante trabajar, pero tu salud y educación son prioridad.',
      icon: '⚖️',
    },
  ];

  const filteredScholarships = scholarships.filter(
    (scholarship) =>
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Button variant="ghost" onClick={onBack} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl mb-2">Recursos y Soluciones</h1>
          <p className="text-gray-600">Encuentra becas, tutorías y apoyo para tus necesidades</p>
        </div>

        <Tabs defaultValue="scholarships" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scholarships">Becas</TabsTrigger>
            <TabsTrigger value="tutors">Tutorías</TabsTrigger>
            <TabsTrigger value="work">Trabajo y Estudio</TabsTrigger>
          </TabsList>

          <TabsContent value="scholarships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-500" />
                  Becas y Apoyos Económicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Buscar becas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredScholarships.map((scholarship) => (
                    <div key={scholarship.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{scholarship.name}</h3>
                          <Badge variant="outline" className="mb-2">
                            {scholarship.type}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">{scholarship.amount}</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>
                          <span className="font-medium">Requisitos:</span> {scholarship.requirements}
                        </p>
                        <p>
                          <span className="font-medium">Fecha límite:</span> {scholarship.deadline}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Aplicar ahora
                        </Button>
                        <Button size="sm" variant="outline">
                          Más información
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredScholarships.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No se encontraron becas con ese criterio de búsqueda.
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-medium text-blue-900 mb-2">💡 Consejo</h3>
                <p className="text-sm text-blue-800">
                  No te desanimes si no calificas para una beca. Hay múltiples opciones de apoyo. 
                  Habla con el departamento de orientación para explorar todas las alternativas disponibles.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-500" />
                  Tutorías entre Pares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-900">
                    💜 Estudiantes de semestres superiores ofrecen tutorías gratuitas. 
                    Ellos han pasado por lo mismo y pueden ayudarte a entender mejor las materias.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {tutors.map((tutor) => (
                    <div key={tutor.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className={`${tutor.color} text-white`}>
                            {tutor.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-medium">{tutor.name}</h3>
                          <p className="text-sm text-gray-600">{tutor.semester}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm">⭐ {tutor.rating}</span>
                            <span className="text-sm text-gray-500">
                              ({tutor.sessions} sesiones)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Materias:</p>
                        <div className="flex flex-wrap gap-2">
                          {tutor.subjects.map((subject) => (
                            <Badge key={subject} variant="outline">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button size="sm" className="w-full bg-purple-500 hover:bg-purple-600">
                        Solicitar tutoría
                      </Button>
                    </div>
                  ))}
                </div>

                <Card className="mt-6 bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-green-900 mb-2">¿Quieres ser tutor?</h3>
                    <p className="text-sm text-green-800 mb-3">
                      Si eres de 5to o 6to semestre, puedes registrarte como tutor y ganar créditos 
                      de servicio social mientras ayudas a otros estudiantes.
                    </p>
                    <Button size="sm" variant="outline" className="border-green-600 text-green-700">
                      Registrarme como tutor
                    </Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="work" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                  Consejos para Estudiar y Trabajar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-900">
                    🎯 Sabemos que muchos estudiantes necesitan trabajar mientras estudian. 
                    Aquí hay algunos consejos para balancear ambas responsabilidades.
                  </p>
                </div>

                <div className="space-y-4">
                  {workStudyTips.map((tip, idx) => (
                    <div key={idx} className="p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{tip.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{tip.title}</h3>
                          <p className="text-sm text-gray-600">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="mt-6 border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg">Programa de Trabajo-Escuela</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">
                      La escuela tiene convenios con empresas locales que ofrecen horarios flexibles 
                      para estudiantes. Estos trabajos entienden tus necesidades académicas.
                    </p>
                    <Button className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Ver oportunidades disponibles
                    </Button>
                  </CardContent>
                </Card>

                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Recursos Adicionales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-sm mb-1">📚 Préstamo de materiales</p>
                        <p className="text-sm text-gray-600">
                          Si no puedes comprar libros, la biblioteca tiene un programa de préstamo extendido.
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-sm mb-1">🍽️ Comedor escolar</p>
                        <p className="text-sm text-gray-600">
                          Comidas subsidiadas disponibles para estudiantes con necesidad económica.
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-sm mb-1">🚌 Transporte</p>
                        <p className="text-sm text-gray-600">
                          Pases de transporte público con descuento para estudiantes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
