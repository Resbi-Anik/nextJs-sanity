import Head from "next/head";
import styles from "../styles/Home.module.css";
// import About from "./components/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch,faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Link from "next/link";
import About from "./components/about";

export default function Home() {
  return (
    <div>
      <div className={styles.topHeader}>
        <span className={styles.topHeaderText}>Contacts</span>{" "}
        <span className={styles.topHeaderText}>Email</span>{" "}
        <span className={styles.topHeaderText}>Address</span>
      </div>

      <div className={styles.pageHeader}>
        <span className={styles.pageHeaderItem}>Logo text</span>
        <span className={styles.pageHeaderHome}>
          <Link href="/" exact>
            <a>Home</a>
          </Link>
        </span>
        <span className={styles.pageHeaderLinks}>
          <Link href="components/about">
            <a>About Us</a>
          </Link>
        </span>
        <span className={styles.pageHeaderLinks}>
          <Link href="components/events">
            <a>Events</a>
          </Link>
        </span>
        <span className={styles.pageHeaderLinks}>
          <Link href="components/programs">
            <a>Programs</a>
          </Link>
        </span>
        <span className={styles.pageHeaderLinks}>
          <Link href="components/gallery">
            <a>Gallery</a>
          </Link>
        </span>
        <span className={styles.pageHeaderLinks}>
          <Link href="components/news">
            <a>News</a>
          </Link>
        </span>
        <button className={styles.pageHeaderBtn}>Contact</button>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faBars} className={styles.menuBars}></FontAwesomeIcon>

      </div>

      <div className={styles.learnMore}></div>
    </div>
  );
}
