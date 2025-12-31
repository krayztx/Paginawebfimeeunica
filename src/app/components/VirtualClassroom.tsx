import { useState } from 'react';
import { Code, Calendar, Trophy } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { CourseDetail } from './CourseDetail';

export function VirtualClassroom() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'CÁLCULO DIFERENCIAL APLICADO A LA INGENIERÍA I',
      code: '1P3507E',
      group: 'Grupo: d',
      icon: <Code className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      badges: ['Inscribirme al SISTEMA', 'Inscribirme al SISTEMA', 'Desagrupado'],
    },
    {
      id: 2,
      title: 'DEFENSA NACIONAL Y DESASTRES NATURALES',
      code: '1P3509E',
      group: 'Grupo: d',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      badges: ['Inscribirme al SISTEMA', 'Inscribirme al SISTEMA', 'Desagrupado'],
    },
    {
      id: 3,
      title: 'ÉTICA Y SOCIEDAD',
      code: '1P35022',
      group: 'Grupo: d',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      badges: ['Inscribirme al SISTEMA', 'Inscribirme al SISTEMA', 'Desagrupado'],
    },
    {
      id: 4,
      title: 'INTRODUCCIÓN A LA INFORMÁTICA',
      code: '1P35023',
      group: 'Grupo: d',
      icon: <Code className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      badges: ['Inscribirme al SISTEMA', 'Inscribirme al SISTEMA', 'Desagrupado'],
    },
  ];

  if (selectedCourse !== null) {
    return <CourseDetail course={courses[selectedCourse]} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header con imagen de universidad */}
        <motion.div
          className="mb-8 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-64 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black">
            <img
              src="https://3b0dd24313.cbaul-cdnwnd.com/7944bbf35774d802637bf4872f7888e9/200000003-c155bc2507/pabellon2.jpg?ph=3b0dd24313"
              alt="Universidad"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="mb-2">Mis Cursos</h1>
                <p className="text-blue-200">Periodo académico 2024-II</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Información de anuncios y fechas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gray-800 dark:bg-gray-900 text-white border-gray-700">
              <CardHeader>
                <CardTitle className="text-orange-400">📢 Anuncios</CardTitle>
                <CardDescription className="text-gray-300">
                  No hay anuncios registrados
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gray-800 dark:bg-gray-900 text-white border-gray-700">
              <CardHeader>
                <CardTitle className="text-orange-400">📅 Fechas importantes</CardTitle>
                <div className="text-center mt-4">
                  <div className="text-5xl font-bold text-orange-400">30</div>
                  <div className="text-sm text-gray-300">noviembre</div>
                  <div className="text-xs text-gray-400 mt-2">Tarea VIRTUAL</div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>

        {/* Lista de cursos */}
        <div className="space-y-4">
          <h2 className="mb-4 dark:text-white">Cursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-gray-800 dark:bg-gray-900 border-gray-700 hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`p-3 rounded-lg bg-gradient-to-r ${course.color} text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {course.icon}
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-white group-hover:text-orange-400 transition-colors mb-2">
                          {course.title} - {course.code}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {course.group}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {course.badges.map((badge, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white`}
                        onClick={() => setSelectedCourse(index)}
                      >
                        Ingresar
                      </Button>
                    </motion.div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
