import { FileText, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Curriculum() {
  const curricula = [
    {
      title: 'Ingeniería Mecánica Eléctrica',
      description: 'Plan de estudios actualizado con cursos de diseño mecánico, sistemas eléctricos, automatización y control.',
      cycles: '10 ciclos académicos',
      credits: '220 créditos',
      icon: '⚙️',
      pdfUrl: 'https://www.unica.edu.pe/fime/info/estudios/PRE%20-%20Ing_Mecanica%20-%20Malla.pdf',
    },
    {
      title: 'Ingeniería Electrónica',
      description: 'Plan de estudios enfocado en sistemas electrónicos, telecomunicaciones, microprocesadores y sistemas digitales.',
      cycles: '10 ciclos académicos',
      credits: '218 créditos',
      icon: '🔌',
      pdfUrl: 'https://www.unica.edu.pe/fime/info/estudios/PRE%20-%20Ing_Electronica%20-%20Malla.pdf',
    },
  ];

  return (
    <section id="malla-curricular" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 dark:text-white">Malla Curricular</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Consulta el plan de estudios completo de cada carrera profesional. Nuestras mallas curriculares están diseñadas para formar ingenieros altamente competitivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {curricula.map((curriculum, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <motion.div
                    className="text-5xl mb-4 inline-block"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {curriculum.icon}
                  </motion.div>
                  <CardTitle className="dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {curriculum.title}
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    {curriculum.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3 mb-6">
                    <motion.div
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      whileHover={{ x: 5 }}
                    >
                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>{curriculum.cycles}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      whileHover={{ x: 5 }}
                    >
                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>{curriculum.credits}</span>
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 group"
                      onClick={() => window.open(curriculum.pdfUrl, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Descargar malla curricular
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Información adicional */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-gray-700">
            <CardContent className="pt-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-700 dark:text-blue-400">Nota:</strong> Las mallas curriculares están sujetas a actualización constante para garantizar la formación de profesionales acorde a las demandas del mercado laboral y los avances tecnológicos.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}