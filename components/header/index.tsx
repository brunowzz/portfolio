"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex h-24 w-full items-center justify-center rounded-lg shadow-2xl">
      <section className="container flex items-center justify-between px-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={78}
            height={82}
            alt="Logo - Bruno Barreiras"
          />
        </Link>

        <nav className="hidden items-center gap-10 scroll-smooth md:flex">
          <Link
            className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
            href="/"
          >
            Home
          </Link>

          <Link
            className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
            href="/#about"
          >
            Sobre
          </Link>

          <Link
            className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
            href="/projects"
          >
            Projetos
          </Link>

          <Link
            className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
            href="/#contact"
          >
            Contato
          </Link>
        </nav>

        <button
          className="flex flex-col gap-1 p-4 text-custom-primary md:hidden"
          onClick={toggleMenu}
        >
          <span className="h-1 w-6 bg-custom-primary"></span>
          <span className="h-1 w-6 bg-custom-primary"></span>
          <span className="h-1 w-6 bg-custom-primary"></span>
        </button>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed left-0 top-0 flex h-full w-full flex-col items-center gap-5 bg-b-terciary transition-all duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="self-end p-4 text-custom-primary"
              onClick={toggleMenu}
            >
              X
            </button>

            <Link
              className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
              href="/#about"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>

            <Link
              className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
              href="/projects"
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </Link>

            <Link
              className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
              href="/#contact"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
