import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'
const Navbar = () => {
    return(
        <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          {/* <Image src='../../public/logo.png' alt="logo" width={200} height={40} /> */}
        </div>
        <div className={styles.navbar__links}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;