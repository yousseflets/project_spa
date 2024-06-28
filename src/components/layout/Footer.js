import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'


const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Lotus</span> &copy; {anoAtual}
      </p>           
      
    </footer>
  )
}

export default Footer