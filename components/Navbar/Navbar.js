import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'


const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">Ambient</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Pricetracker">Order</Link>
            </li>
          </ul>
          <button className="btn " type="submit" >Register</button>
          <button className={styles.btn} type="submit">Login</button>
        </div>

    </nav>
    );
}

export default Navbar;