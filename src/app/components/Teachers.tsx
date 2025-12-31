import { UserSearch, BookUser, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Teachers() {
  const [searchTerm, setSearchTerm] = useState('');

  const teachers = [
    { num: '01', name: 'ALARCON QUISPE, MARTIN RAYMUNDO', category: 'ORDINARIO PRINCIPAL' },
    { num: '02', name: 'ALTAMIRANO YATACO, YURI WILLIAM', category: 'ORDINARIO AUXILIAR' },
    { num: '03', name: 'ANDIA GUZMAN, FIDEL HUMBERTO', category: 'ORDINARIO PRINCIPAL' },
    { num: '04', name: 'AQUIJE TUEROS, LUIS ANTONIO', category: 'ORDINARIO PRINCIPAL' },
    { num: '05', name: 'ARAGON CASTRO, ISMAEL VALERIO', category: 'ORDINARIO PRINCIPAL' },
    { num: '06', name: 'ARESTEGUI RAMOS, JESUS RENACIMIENTO', category: 'ORDINARIO ASOCIADO' },
    { num: '07', name: 'ARROYO QUISPE, VICTOR JOEL', category: 'ORDINARIO PRINCIPAL' },
    { num: '08', name: 'BENAVIDES PALOMINO, MARIO EFRAIN', category: 'ORDINARIO PRINCIPAL' },
    { num: '09', name: 'BENDEZU BENDEZU, JUAN LUIS', category: 'ORDINARIO PRINCIPAL' },
    { num: '10', name: 'CACERES HUAMAN, FELIPE', category: 'ORDINARIO PRINCIPAL' },
    { num: '11', name: 'CACERES QUINTANILLA, VICTOR DANILO', category: 'ORDINARIO ASOCIADO' },
    { num: '12', name: 'CAICEDO BUSTAMANTE, VICTOR ANTONIO', category: 'ORDINARIO PRINCIPAL' },
    { num: '13', name: 'CALDERON PINO, REYMUNDO', category: 'ORDINARIO PRINCIPAL' },
    { num: '14', name: 'CAMPOS BARRIENTOS, JOSE ROSENDO', category: 'ORDINARIO PRINCIPAL' },
    { num: '15', name: 'CAMPOS TIRADO, ROBERTO KARLO', category: 'ORDINARIO AUXILIAR' },
    { num: '16', name: 'CHAVEZ ESPINOZA, JOSE ARMANDO', category: 'ORDINARIO ASOCIADO' },
    { num: '17', name: 'COLLAZOS SALAZAR, CAMILO ODULMIRO', category: 'ORDINARIO ASOCIADO' },
    { num: '18', name: 'CUBA ACASIETE, ROBERTO', category: 'ORDINARIO PRINCIPAL' },
    { num: '19', name: 'CUBA GARCIA, JUSTO ENRIQUE', category: 'ORDINARIO ASOCIADO' },
    { num: '20', name: 'DIAZ OCHOA, JOSE EDUARDO', category: 'ORDINARIO AUXILIAR' },
    { num: '21', name: 'DONAYRE PASACHE, JOSE LUIS', category: 'ORDINARIO PRINCIPAL' },
    { num: '22', name: 'DORIA VELARDE, ADAN JOSE', category: 'ORDINARIO AUXILIAR' },
    { num: '23', name: 'ECHEGARAY ROJO, JAVIER AMADOR', category: 'ORDINARIO PRINCIPAL' },
    { num: '24', name: 'ECHEGARAY ROJO, JULIO EDUARDO', category: 'ORDINARIO PRINCIPAL' },
    { num: '25', name: 'ESCUDERO FLORES, JORGE DANTE', category: 'ORDINARIO ASOCIADO' },
    { num: '26', name: 'ESPINO PARVINA, NICOLAS EZEQUIEL', category: 'ORDINARIO ASOCIADO' },
    { num: '27', name: 'FLORES GUTIERREZ, EDUARDO ISRAEL', category: 'ORDINARIO PRINCIPAL' },
    { num: '28', name: 'GONZALES ALLAUJA, PERCY ABEL', category: 'ORDINARIO ASOCIADO' },
    { num: '29', name: 'GUERRERO SALAZAR, FERNANDO ALBERTO EUGENIO', category: 'ORDINARIO PRINCIPAL' },
    { num: '30', name: 'GUTIERREZ CORTEZ, JOSE LUIS', category: 'ORDINARIO ASOCIADO' },
    { num: '31', name: 'GUTIERREZ FERREYRA, JAVIER ORLANDO', category: 'ORDINARIO PRINCIPAL' },
    { num: '32', name: 'HERMOSA ALTEZ, PERCY RONALD', category: 'ORDINARIO AUXILIAR' },
    { num: '33', name: 'HERNANDEZ HERNANDEZ, PRIMITIVO BACILIO', category: 'ORDINARIO PRINCIPAL' },
    { num: '34', name: 'JARA VELASQUEZ, WILMER ARTURO', category: 'ORDINARIO PRINCIPAL' },
    { num: '35', name: 'KONG SANCHEZ, JORGE JOSE', category: 'ORDINARIO ASOCIADO' },
    { num: '36', name: 'KRAJNIK STULIN, FRANCO LUCIANO', category: 'ORDINARIO PRINCIPAL' },
    { num: '37', name: 'MAGALLANES RONCEROS, LUIS ALBERTO', category: 'ORDINARIO PRINCIPAL' },
    { num: '38', name: 'MEDINA GARCIA, CARLOS ALCIDES', category: 'ORDINARIO PRINCIPAL' },
    { num: '39', name: 'MORALES VALENCIA, JOSE DEMETRIO', category: 'ORDINARIO PRINCIPAL' },
    { num: '40', name: 'NAVARRETE SENDA, EDUARDO ANTONIO', category: 'ORDINARIO PRINCIPAL' },
    { num: '41', name: 'ONTIVEROS DUEÑAS, MIGUEL ANGEL', category: 'ORDINARIO AUXILIAR' },
    { num: '42', name: 'ORE HUARCAYA, CARLOS WILFREDO', category: 'ORDINARIO PRINCIPAL' },
    { num: '43', name: 'ORMEÑO BERROCAL, REYNALDO JESUS', category: 'ORDINARIO ASOCIADO' },
    { num: '44', name: 'PACHAS DE LA CRUZ, ROMAN ARTURO', category: 'ORDINARIO AUXILIAR' },
    { num: '45', name: 'PACHECO CASAVILCA, ZENON EUSEBIO', category: 'ORDINARIO ASOCIADO' },
    { num: '46', name: 'PACHECO HUAMAN, NICANOR WILLIAMS', category: 'ORDINARIO PRINCIPAL' },
    { num: '47', name: 'PADILLA RIOS, AURELIO MARCELO', category: 'ORDINARIO PRINCIPAL' },
    { num: '48', name: 'PARVINA CARRASCO, ARCADIO BENITO', category: 'ORDINARIO PRINCIPAL' },
    { num: '49', name: 'PRADA ORMEÑO, CARLOS ALBERTO', category: 'ORDINARIO ASOCIADO' },
    { num: '50', name: 'RAMIREZ LI, JOSE RICARDO', category: 'ORDINARIO ASOCIADO' },
    { num: '51', name: 'RAMIREZ OCHOA, JOSE TOMAS', category: 'ORDINARIO PRINCIPAL' },
    { num: '52', name: 'RAMOS FELIPA, JAVIER RICARDO', category: 'ORDINARIO PRINCIPAL' },
    { num: '53', name: 'RODRIGUEZ CASAVILCA, HIPOLITO MARTIN', category: 'ORDINARIO ASOCIADO' },
    { num: '54', name: 'RODRIGUEZ CHACON, JOSE CARLOS', category: 'ORDINARIO PRINCIPAL' },
    { num: '55', name: 'ROMAN MUNIVE, WILDER ENRIQUE', category: 'ORDINARIO ASOCIADO' },
    { num: '56', name: 'SALCEDO HERNANDEZ, JOSE MARIA FERNANDO', category: 'ORDINARIO AUXILIAR' },
    { num: '57', name: 'SOTOMAYOR IZAGUIRRE, JOSE LEON', category: 'JEFE DE PRACTICA' },
    { num: '58', name: 'TELLO MEGO, HERNAN DARIO', category: 'ORDINARIO ASOCIADO' },
    { num: '59', name: 'TINCOPA ALFARO, JULIO CESAR', category: 'ORDINARIO ASOCIADO' },
    { num: '60', name: 'UCULMANA MATIAS, JOSE LUIS', category: 'ORDINARIO AUXILIAR' },
    { num: '61', name: 'VARGAS CARITAS, CLAUDIO', category: 'ORDINARIO ASOCIADO' },
    { num: '62', name: 'VASQUEZ MORALES, HECTOR ILICH', category: 'ORDINARIO AUXILIAR' },
  ];

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    if (category.includes('PRINCIPAL')) return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
    if (category.includes('ASOCIADO')) return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
    if (category.includes('AUXILIAR')) return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300';
    return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300';
  };

  const handleSearchCTI = (name: string) => {
    const searchUrl = `https://ctivitae.concytec.gob.pe/appDirectorioCTI/BuscarInvestigadores.do?tipo-accion=buscar-investigador`;
    window.open(searchUrl, '_blank');
  };

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
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <BookUser className="w-12 h-12 text-blue-600" />
            </motion.div>
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cuerpo Docente FIMEE
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Nuestro equipo de docentes altamente calificados comprometidos con la excelencia académica
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <UserSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar por nombre o categoría..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-lg text-center">
            <p className="text-3xl font-bold">{teachers.filter(t => t.category.includes('PRINCIPAL')).length}</p>
            <p className="text-sm">Principales</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl shadow-lg text-center">
            <p className="text-3xl font-bold">{teachers.filter(t => t.category.includes('ASOCIADO')).length}</p>
            <p className="text-sm">Asociados</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-lg text-center">
            <p className="text-3xl font-bold">{teachers.filter(t => t.category.includes('AUXILIAR')).length}</p>
            <p className="text-sm">Auxiliares</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl shadow-lg text-center">
            <p className="text-3xl font-bold">{teachers.length}</p>
            <p className="text-sm">Total</p>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">N°</th>
                  <th className="px-6 py-4 text-left">Apellidos y Nombres</th>
                  <th className="px-6 py-4 text-left">Categoría Docente</th>
                  <th className="px-6 py-4 text-center">CTI VITAE</th>
                </tr>
              </thead>
              <tbody>
                {filteredTeachers.map((teacher, index) => (
                  <motion.tr
                    key={teacher.num}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold shadow-md">
                        {teacher.num}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {teacher.name}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(teacher.category)}`}>
                        {teacher.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={() => handleSearchCTI(teacher.name)}
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                          size="sm"
                        >
                          <UserSearch className="w-4 h-4 mr-1" />
                          Ver CTI
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      </motion.div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-4 space-y-4">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.num}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 shadow-lg border-l-4 border-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold shadow-md">
                    {teacher.num}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleSearchCTI(teacher.name)}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      size="sm"
                    >
                      <UserSearch className="w-4 h-4 mr-1" />
                      CTI
                    </Button>
                  </motion.div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{teacher.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(teacher.category)}`}>
                  {teacher.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No Results */}
        {filteredTeachers.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No se encontraron docentes que coincidan con tu búsqueda
            </p>
          </motion.div>
        )}

        {/* Footer Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-lg border-2 border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-blue-600 dark:text-blue-400">Total de Docentes: {teachers.length}</span>
              <br />
              Haz clic en "Ver CTI" para buscar el perfil del docente en el Directorio Nacional de Investigadores de CONCYTEC
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
