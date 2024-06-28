import styles from './Home.module.css'
import home from "../../img/lotusSpa2.png";
import divider from "../../img/divider.png";
import Company from './Company';
import Services from './Services';


function Home() {
  return (
    <section className={styles.home_container}>
      <img src={home} alt="Lotus" />
      <Company />
      <img src={divider} alt="Lotus" height={100}/>
      <Services />
      <img src={divider} alt="Lotus" height={100}/>
    </section>
  
  )
}

export default Home