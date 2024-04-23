import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function page() {
  return (
    <>
      {/* Contenedor principal */}
      <div className="relative h-screen">
        {/* Imagen de fondo */}
        <Image
          src='/fondo-l.jpg'
        
          layout="fill" // Llena todo el contenedor
          objectFit="cover" // Ajusta la imagen para cubrir completamente el contenedor
          className="z-0" // Coloca la imagen detrás del contenido
        />  
        {/* Contenedor del formulario de inicio de sesión */}
        <div className="absolute top-20 right-0 z-10"> {/* Alinea el formulario de inicio de sesión en la parte superior derecha */}
          <SignIn />
        </div>
      </div>
    </>
  );
}
