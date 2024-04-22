import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image src='/fondo-l.jpg' alt="cacaotera" layout="fill" objectFit="cover" />
      </div>
      {/* Formulario de inicio de sesión */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <SignIn />
      </div>
    </div>
  );
}
