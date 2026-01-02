import { Crown, GraduationCap, Building2, FlaskConical, BookOpen, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { motion } from 'motion/react';

export function Authorities() {
  const authorities = [
    {
      category: 'Decano',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-500',
      positions: [
        {
          title: 'Decano',
          name: 'Dr. Reymundo Calderón Pino',
          resolution: 'Resolución Rectoral N° 1583-R-UNICA-2024',
        },
      ],
    },
    {
      category: 'Director de Escuela Profesional ',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-500',
      positions: [
        {
          title: 'Escuela Profesional de Ingeniería Electrónica',
          subtitle: 'Director',
          name: 'Mag. José Armando Chávez Espinoza',
          resolution: 'Resolución Decanal N° 005-2025-UNICA-FIMEE-D',
        },
        {
          title: 'Escuela Profesional de Ingeniería Mecánica Eléctrica',
          subtitle: 'Director',
          name: 'Mag. Percy Abel Gonzáles Allauja',
          resolution: 'Resolución Decanal N° 003-2025-UNICA-FIMEE-D',
        },
      ],
    },
    {
      category: 'Director de Departamento Académico',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-500',
      positions: [
        {
          title: 'Departamento Académico de Ciencias de Investigación de la Ingeniería',
          subtitle: 'Director',
          name: 'Dr. Javier Orlando Gutiérrez Ferreyra',
          resolution: 'Resolución Rectoral N° 702-R-UNICA-2025',
        },
        {
          title: 'Departamento Académico de Electricidad y Electrónica',
          subtitle: 'Director',
          name: 'Mag. Mario Efraín Benavides Palomino',
          resolution: 'Resolución Rectoral N° 1088-R-UNICA-2025',
        },
        {
          title: 'Departamento Académico de Energía y Producción',
          subtitle: 'Director',
          name: 'Dr. José Demetrio Morales Valencia',
          resolution: 'Resolución Rectoral N° 663-R-UNICA-2025',
        },
      ],
    },
    {
      category: 'Director de Unidad de Investigación',
      icon: <FlaskConical className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-500',
      positions: [
        {
          title: 'Unidad de Investigación',
          subtitle: 'Director',
          name: 'Dr. José Luis Donayre Pasache',
          resolution: 'Resolución Decanal N° 007-2025-UNICA-FIMEE-D',
        },
      ],
    },
    {
      category: 'Director de Unidad de Posgrado',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-500',
      positions: [
        {
          title: 'Unidad de Posgrado',
          subtitle: 'Director',
          name: 'Dr. Fernando Alberto Eugenio Guerrero Salazar',
          resolution: 'Resolución Decanal N° 006-2023-D-FIMEE-UNICA',
        },
      ],
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Crown className="w-12 h-12 text-yellow-500" />
            </motion.div>
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:text-white">
              Autoridades FIMEE
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Conoce a las autoridades que lideran nuestra facultad con excelencia y compromiso académico
          </p>
        </motion.div>

        {/* Autoridades por categoría */}
        <div className="space-y-12">
          {authorities.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              {/* Header de la categoría */}
              <div className="mb-6">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${section.color} text-white shadow-lg`}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {section.icon}
                  </motion.div>
                  <h2 className="text-white">{section.category}</h2>
                </div>
              </div>

              {/* Cards de autoridades */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.positions.map((position, posIndex) => (
                  <motion.div
                    key={posIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (posIndex * 0.1) }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Card className={`h-full ${section.bgColor} border-l-4 ${section.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300`}>
                      <CardHeader className="space-y-3">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${section.color} text-white shadow-lg mx-auto`}>
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {section.icon}
                          </motion.div>
                        </div>
                        
                        <div className="text-center">
                          <CardTitle className="text-gray-900 dark:text-white mb-2">
                            {position.title}
                          </CardTitle>
                          {position.subtitle && (
                            <p className={`text-sm font-semibold bg-gradient-to-r ${section.color} bg-clip-text text-transparent mb-3`}>
                              {position.subtitle}
                            </p>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="text-center space-y-4">
                        <motion.div
                          className={`p-4 rounded-lg bg-white dark:bg-gray-800 shadow-inner border-2 ${section.borderColor}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <p className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                            {position.name}
                          </p>
                        </motion.div>
                        
                        <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                          <FileText className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`} />
                          <p className="text-xs text-gray-600 dark:text-gray-400 text-left">
                            {position.resolution}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-lg border-2 border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-blue-600 dark:text-blue-400">FIMEE - UNICA</span>
              <br />
              Comprometidos con la excelencia académica y el desarrollo profesional
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
