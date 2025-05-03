import type { Metadata } from 'next';
import Link from 'next/link';
import './global.css';

export const metadata: Metadata = {
  title: 'Mi App IHC',
  description: 'Aprendiendo Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 p-4 text-white shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Mi Proyecto</h1>
            <nav className="flex gap-6">
              <Link 
                href="/" 
                className="hover:text-blue-200 transition-colors"
              >
                Inicio
              </Link>
              <Link 
                href="/about" 
                className="hover:text-blue-200 transition-colors"
              >
                Sobre Mí
              </Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}