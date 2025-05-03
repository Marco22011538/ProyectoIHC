import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">¡Hola, Next.js! 👋</h1>
      <p className="mt-4">Esta es mi primera página.</p>
      
      <div className="mt-6 flex flex-col items-center gap-4">
        <Button 
          text="Haz clic" 
          className="bg-blue-500 hover:bg-blue-600 text-white"
        />
        
        <Image
          src="/logo.png"
          alt="Logo de la app"
          width={200}
          height={200}
          className="mx-auto"
          priority // Importante para imágenes en la página principal
        />
        
        <Link href="/posts" className="mt-4">
          <Button 
            text="Ver Posts" 
            className="bg-green-500 hover:bg-green-600 text-white"
          />
        </Link>
      </div>
    </main>
  );
}