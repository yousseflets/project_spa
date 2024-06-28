import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Lotus" width={80} height={80}/>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;