import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/LOGO-SEEDAS.jpg"
            alt="Seedas Logo"
            width={120}
            height={55}
          />
        </div>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button}>About Us</button>
          </Link>
          <Link href="/sign-in">
            <button className={styles.button}>ingresar</button>
          </Link>
          <Link href="/sign-up">
            <button className={styles.button}>Regístrate</button>
          </Link>
          
        </div>
      </header>
      <section className={styles.description}>
        <p>
          Bienvenido a Seedas, la plataforma de gestión integral para tu negocio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis
          turpis et nulla consectetur, et ultricies felis consequat. Integer
          lobortis hendrerit diam, eget fermentum odio aliquam nec. Vivamus
          vestibulum, libero ac fringilla lacinia, neque leo convallis elit, sed
          eleifend purus nulla nec eros. Fusce ac pulvinar elit. Sed bibendum
          sollicitudin sapien, sed laoreet tortor luctus nec.
        </p>
      </section>
    </main>
  );
}

