import { useState } from 'react';
import { ArrowLeft, MessageCircle, ClipboardList, FileText, GraduationCap, Send, Upload, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { motion } from 'motion/react';

interface CourseDetailProps {
  course: {
    title: string;
    code: string;
    group: string;
  };
  onBack: () => void;
}

export function CourseDetail({ course, onBack }: CourseDetailProps) {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Profesor García', message: 'Bienvenidos al curso. Por favor revisen el material de la primera semana.', time: '10:30 AM' },
    { id: 2, user: 'Ana Pérez', message: '¿Hasta cuándo podemos entregar la tarea 1?', time: '11:45 AM' },
    { id: 3, user: 'Profesor García', message: 'La fecha límite es el viernes a las 11:59 PM', time: '12:00 PM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const grades = [
    { assignment: 'Tarea 1 - Derivadas', grade: '18', maxGrade: '20', date: '15/11/2024' },
    { assignment: 'Examen Parcial', grade: '16', maxGrade: '20', date: '22/11/2024' },
    { assignment: 'Trabajo Grupal', grade: '19', maxGrade: '20', date: '28/11/2024' },
  ];

  const assignments = [
    { id: 1, title: 'Tarea 2 - Integrales', dueDate: '30/11/2024', status: 'Pendiente', submitted: false },
    { id: 2, title: 'Informe de Laboratorio', dueDate: '05/12/2024', status: 'Pendiente', submitted: false },
    { id: 3, title: 'Proyecto Final', dueDate: '15/12/2024', status: 'No iniciado', submitted: false },
  ];

  const exams = [
    { id: 1, title: 'Examen Final', date: '10/12/2024', time: '10:00 AM - 12:00 PM', location: 'Aula 301' },
    { id: 2, title: 'Examen Sustitutorio', date: '17/12/2024', time: '10:00 AM - 12:00 PM', location: 'Aula 301' },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        user: 'Tú',
        message: newMessage,
        time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header del curso */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a mis cursos
          </Button>
          
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-none">
            <CardHeader>
              <CardTitle className="text-2xl">{course.title}</CardTitle>
              <p className="text-orange-100">{course.code} - {course.group}</p>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Tabs con contenido */}
        <Tabs defaultValue="chat" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 bg-white dark:bg-gray-800">
            <TabsTrigger value="chat" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="grades" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <GraduationCap className="w-4 h-4 mr-2" />
              Notas
            </TabsTrigger>
            <TabsTrigger value="assignments" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <ClipboardList className="w-4 h-4 mr-2" />
              Tareas
            </TabsTrigger>
            <TabsTrigger value="exams" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              Exámenes
            </TabsTrigger>
          </TabsList>

          {/* Chat Tab */}
          <TabsContent value="chat">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="dark:text-white">Chat del Curso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4 h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3 rounded-lg ${
                        msg.user === 'Tú'
                          ? 'bg-orange-500 text-white ml-auto max-w-[80%]'
                          : 'bg-white dark:bg-gray-700 dark:text-white max-w-[80%]'
                      }`}
                    >
                      <p className="font-semibold text-sm mb-1">{msg.user}</p>
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Grades Tab */}
          <TabsContent value="grades">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="dark:text-white">Mis Notas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {grades.map((grade, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold dark:text-white">{grade.assignment}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{grade.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-500">
                          {grade.grade}/{grade.maxGrade}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-2 border-orange-500">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold dark:text-white">Promedio del curso:</span>
                      <span className="text-3xl font-bold text-orange-500">17.67</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="dark:text-white">Tareas y Trabajos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment, index) => (
                    <motion.div
                      key={assignment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold dark:text-white">{assignment.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Fecha de entrega: {assignment.dueDate}
                          </p>
                          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${
                            assignment.status === 'Pendiente'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                          }`}>
                            {assignment.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Descargar instrucciones
                        </Button>
                        <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                          <Upload className="w-4 h-4 mr-2" />
                          Subir archivo
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Exams Tab */}
          <TabsContent value="exams">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="dark:text-white">Próximos Exámenes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exams.map((exam, index) => (
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border-l-4 border-orange-500"
                    >
                      <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mb-2">
                        {exam.title}
                      </h3>
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p className="flex items-center gap-2">
                          <span className="font-semibold">📅 Fecha:</span> {exam.date}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="font-semibold">⏰ Horario:</span> {exam.time}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="font-semibold">📍 Lugar:</span> {exam.location}
                        </p>
                      </div>
                      <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                        Ver detalles del examen
                      </Button>
                    </motion.div>
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
