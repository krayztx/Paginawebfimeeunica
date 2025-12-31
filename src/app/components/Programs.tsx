import { Cpu } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Programs() {
  const programs = [
    {
      title: 'Ingeniería Mecánica Eléctrica',
      description: 'Formamos ingenieros especializados en el diseño, análisis y operación de sistemas mecánicos y eléctricos, con énfasis en manufactura, energía, automatización y sistemas de potencia.',
      image: 'https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjYwMDIyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '5 años',
      color: 'blue',
      features: [
        'Diseño de sistemas mecánicos y eléctricos',
        'Análisis de sistemas de potencia',
        'Automatización industrial',
        'Manufactura avanzada',
      ],
      planUrl: 'https://www.unica.edu.pe/fime/info/estudios/PRE%20-%20Ing_Mecanica%20-%20Plan.pdf',
    },
    {
      title: 'Ingeniería Electrónica',
      description: 'Ingenieros especializados en sistemas electrónicos, telecomunicaciones, control automático, diseño de circuitos electrónicos avanzados y sistemas digitales.',
      image: 'https://images.unsplash.com/photo-1581094271453-1298de1aa392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NjAwMjI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '5 años',
      color: 'purple',
      features: [
        'Diseño de circuitos electrónicos',
        'Sistemas digitales',
        'Telecomunicaciones',
        'Control automático',
      ],
      planUrl: 'https://www.unica.edu.pe/fime/info/estudios/PRE%20-%20Ing_Electronica%20-%20Plan.pdf',
    },
  ];

  return (
    <section id="carreras" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 dark:text-white">Nuestras Carreras Profesionales</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Ofrecemos programas de ingeniería acreditados y de alta calidad que preparan a nuestros estudiantes para enfrentar los desafíos tecnológicos del siglo XXI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400">
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{program.duration}</span>
                  </div>
                  <CardTitle className="dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <ul className="space-y-2 mb-4">
                    {program.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
                      onClick={() => window.open(program.planUrl, '_blank')}
                    >
                      Más información
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}