import { useState } from 'react';
import { ArrowLeft, User, MessageCircle, Clock, Search, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Textarea } from './ui/textarea';

interface MiRedDeApoyoProps {
  onBack: () => void;
}

export function MiRedDeApoyo({ onBack }: MiRedDeApoyoProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const teachers = [
    {
      id: 1,
      name: 'Prof. María González',
      subject: 'Matemáticas',
      avatar: 'MG',
      available: true,
      schedule: 'Lunes y Miércoles 14:00-16:00',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Prof. Carlos Ramírez',
      subject: 'Física',
      avatar: 'CR',
      available: true,
      schedule: 'Martes y Jueves 15:00-17:00',
      color: 'bg-purple-500',
    },
    {
      id: 3,
      name: 'Prof. Ana Martínez',
      subject: 'Literatura',
      avatar: 'AM',
      available: false,
      schedule: 'Viernes 13:00-15:00',
      color: 'bg-pink-500',
    },
    {
      id: 4,
      name: 'Prof. Juan López',
      subject: 'Historia',
      avatar: 'JL',
      available: true,
      schedule: 'Lunes y Viernes 16:00-18:00',
      color: 'bg-green-500',
    },
  ];

  const communityPosts = [
    {
      id: 1,
      author: 'Estudiante123',
      subject: 'Ayuda con Matemáticas',
      content: 'Tengo problemas para entender las ecuaciones cuadráticas. ¿Alguien puede explicármelo de forma simple?',
      replies: 5,
      time: 'Hace 2 horas',
      tag: 'Matemáticas',
    },
    {
      id: 2,
      author: 'Anónimo',
      subject: 'Presión económica en casa',
      content: 'Mi familia está pasando por una situación difícil y me cuesta concentrarme en la escuela...',
      replies: 12,
      time: 'Hace 4 horas',
      tag: 'Apoyo emocional',
    },
    {
      id: 3,
      author: 'FuturoIngeniero',
      subject: 'Tips para proyecto de Física',
      content: '¿Alguien tiene ideas creativas para un proyecto sobre energía renovable?',
      replies: 8,
      time: 'Hace 1 día',
      tag: 'Física',
    },
  ];

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() && selectedTeacher) {
      alert('Mensaje enviado al profesor. Te responderán pronto.');
      setMessage('');
      setSelectedTeacher(null);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Button variant="ghost" onClick={onBack} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl mb-2">Mi Red de Apoyo</h1>
          <p className="text-gray-600">Conecta con profesores y una comunidad que te entiende</p>
        </div>

        <Tabs defaultValue="teachers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="teachers">Profesores Mentores</TabsTrigger>
            <TabsTrigger value="community">Comunidad</TabsTrigger>
          </TabsList>

          <TabsContent value="teachers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-500" />
                  Conecta con un Profesor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Buscar por nombre o materia..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {filteredTeachers.map((teacher) => (
                    <div
                      key={teacher.id}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className={`${teacher.color} text-white`}>
                            {teacher.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-medium">{teacher.name}</h3>
                          <Badge variant="outline" className="text-xs mb-2">
                            {teacher.subject}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Clock className="w-4 h-4" />
                            {teacher.schedule}
                          </div>
                          <div className="flex items-center gap-2">
                            {teacher.available ? (
                              <Badge className="bg-green-100 text-green-700">Disponible</Badge>
                            ) : (
                              <Badge className="bg-gray-100 text-gray-700">No disponible</Badge>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedTeacher(teacher.id)}
                              disabled={!teacher.available}
                              className="gap-2"
                            >
                              <MessageCircle className="w-4 h-4" />
                              Enviar mensaje
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedTeacher && (
                  <Card className="border-2 border-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Mensaje para {teachers.find(t => t.id === selectedTeacher)?.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        placeholder="Escribe tu pregunta o mensaje..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="mb-4"
                      />
                      <div className="flex gap-2">
                        <Button onClick={handleSendMessage} className="gap-2">
                          <Send className="w-4 h-4" />
                          Enviar mensaje
                        </Button>
                        <Button variant="outline" onClick={() => setSelectedTeacher(null)}>
                          Cancelar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-purple-500" />
                  Comunidad Segura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-900">
                    💜 Este es un espacio seguro y anónimo moderado por orientadores. Aquí puedes compartir
                    tus dificultades y recibir apoyo de compañeros y expertos.
                  </p>
                </div>

                <Button className="w-full mb-6 bg-purple-500 hover:bg-purple-600">
                  + Crear nueva publicación
                </Button>

                <div className="space-y-4">
                  {communityPosts.map((post) => (
                    <div key={post.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-gray-300">
                              {post.author[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.time}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {post.tag}
                        </Badge>
                      </div>
                      <h3 className="font-medium mb-2">{post.subject}</h3>
                      <p className="text-sm text-gray-600 mb-3">{post.content}</p>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <MessageCircle className="w-4 h-4" />
                          {post.replies} respuestas
                        </Button>
                        <Button variant="ghost" size="sm">
                          Ver conversación
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
