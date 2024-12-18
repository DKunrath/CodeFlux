import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">CodeFlux</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Sobre Nós</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#portfolio">Portfólio</NavLink>
            <NavLink href="#testimonials">Clientes</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>Sobre Nós</MobileNavLink>
              <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</MobileNavLink>
              <MobileNavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Clientes</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className="text-gray-600 hover:text-indigo-600 transition-colors font-medium block px-4 py-2"
    >
      {children}
    </a>
  );
}