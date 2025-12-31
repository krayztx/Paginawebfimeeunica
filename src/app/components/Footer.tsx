import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Logo y descripción */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                <img 
                  src="https://www.unica.edu.pe/fime/info/fime_logo.png" 
                  alt="FIMEE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white">FIMEE</h3>
                <p className="text-sm text-gray-400">UNICA</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Formando ingenieros de excelencia para el desarrollo del país.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sobre FIMEE
                </a>
              </li>
              <li>
                <a href="#carreras" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#malla-curricular" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Malla Curricular
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Av. Los Maestros s/n, Ica, Perú
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  +51 056 252929
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  fimee@unica.edu.pe
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales */}
          <div>
            <h3 className="mb-4 text-white">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 FIMEE - UNICA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}