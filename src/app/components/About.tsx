import { GraduationCap, Users, Building2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

export function About() {
  const stats = [
    {
      icon: GraduationCap,
      value: '50+',
      label: 'Años de trayectoria',
    },
    {
      icon: Users,
      value: '2000+',
      label: 'Estudiantes activos',
    },
    {
      icon: Building2,
      value: '9+',
      label: 'Laboratorios equipados',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 dark:text-white">Sobre FIMEE</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            La Facultad de Ingeniería Mecánica Eléctrica y Electrónica de la UNICA es una institución líder en la formación de ingenieros altamente capacitados y comprometidos con el desarrollo tecnológico y social del país.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400">
                  <CardContent className="pt-6">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <p className="text-gray-900 dark:text-white mb-2">{stat.value}</p>
                    <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Contenido adicional con imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 dark:text-white">Nuestra Misión</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Formar profesionales competentes en Ingeniería Mecánica, Eléctrica y Electrónica, comprometidos con la investigación, innovación y desarrollo tecnológico, capaces de contribuir al progreso sostenible de la región y el país.
            </p>
            <h3 className="mb-4 dark:text-white">Nuestra Visión</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ser una facultad líder en la formación de ingenieros de excelencia, reconocida a nivel nacional e internacional por su calidad académica, investigación de alto impacto y vinculación con el sector productivo.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-xl group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src="https://elcomercio-diariocorreo-prod.web.arc-cdn.net/resizer/v2/5CMCO4B3FBBY7MZWM6X2DBIIRA.jpg?auth=041157786e50ab28bcdc64a22855258d8ae6d1be058f61c2e6f375c6734b72c6&width=1200&height=1200&smart=true&quality=75"
              alt="Estudiantes de FIMEE"
              className="w-full h-full object-cover transition-transform duration-500"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}