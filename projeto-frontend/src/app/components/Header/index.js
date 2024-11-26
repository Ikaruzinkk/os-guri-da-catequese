"use client";
import { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div>
        <Image className={styles.imagem} src='/images/_image.jpg' width={70} height={70} alt='eduardo bravo'/>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/sobre'>Sobre</Link></li>
          <li><Link href='/servicos'>Serviços</Link></li>
          <li><Link href='/contato'>Contato</Link></li>
        </ul>
      </nav>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;