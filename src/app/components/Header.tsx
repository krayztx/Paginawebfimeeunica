import { useState } from 'react';
import { Menu, X, GraduationCap, Users, BookUser } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'motion/react';

interface HeaderProps {
  currentPage: 'home' | 'authorities' | 'teachers';
  setCurrentPage: (page: 'home' | 'authorities' | 'teachers') => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#sobre', label: 'Sobre FIMEE' },
    { href: '#carreras', label: 'Carreras' },
    { href: '#malla-curricular', label: 'Malla Curricular' },
  ];

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleAulaVirtualClick = () => {
    window.open('https://fimeeunica.milaulas.com/login/index.php?loginredirect=1', '_blank');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y nombre */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white rounded-lg p-1">
              <img 
                src="https://www.unica.edu.pe/fime/info/fime_logo.png" 
                alt="FIMEE Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 dark:text-white">FIMEE</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">UNICA</p>
            </div>
          </motion.div>

          {/* Links de navegación y Aula Virtual - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {currentPage === 'home' && (
              <ul className="flex items-center gap-4 mr-2">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors relative group text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {link.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setCurrentPage(currentPage === 'teachers' ? 'home' : 'teachers')}
              >
                <BookUser className="w-4 h-4 md:mr-2" />
                <span className="hidden lg:inline">Docentes</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setCurrentPage(currentPage === 'authorities' ? 'home' : 'authorities')}
              >
                <Users className="w-4 h-4 md:mr-2" />
                <span className="hidden lg:inline">Autoridades</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white shadow-lg"
                onClick={handleAulaVirtualClick}
              >
                <GraduationCap className="w-4 h-4 md:mr-2" />
                <span className="hidden lg:inline">Aula Virtual</span>
              </Button>
            </motion.div>
          </div>

          {/* Botón de tema y menú móvil */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 space-y-2 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {currentPage === 'home' && (
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
            
            <Button
              variant="outline"
              className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              onClick={() => {
                setCurrentPage(currentPage === 'teachers' ? 'home' : 'teachers');
                setIsMenuOpen(false);
              }}
            >
              <BookUser className="w-4 h-4 mr-2" />
              {currentPage === 'teachers' ? 'Volver' : 'Docentes'}
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              onClick={() => {
                setCurrentPage(currentPage === 'authorities' ? 'home' : 'authorities');
                setIsMenuOpen(false);
              }}
            >
              <Users className="w-4 h-4 mr-2" />
              {currentPage === 'authorities' ? 'Volver' : 'Autoridades'}
            </Button>
            
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white"
              onClick={() => {
                handleAulaVirtualClick();
                setIsMenuOpen(false);
              }}
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Aula Virtual
            </Button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
