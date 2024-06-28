import styles from './Services.module.css'
import massagens from "../../img/m-tantrica.jpg";
import spaDay from "../../img/tantrica.jpg";
import diaNoiva from "../../img/dia-noiva.jpg";

import ContainerHome from '../layout/ContainerHome'


function Services() {

  return (
    <>
        <div className={styles.project_details}>
          <ContainerHome customClass="column">
            <div className={styles.details_container1}>
              <img src={massagens} alt="Lotus" width={350} height={400}/>
                <div className={styles.form}>
                  <h1 style={{fontSize: '50px'}}>Massagens</h1>
                  <p style={{fontSize: '20px'}}>
                    Massagem energizante e revigorante aplicada com óleo aquecido por vela aromática. Equilibra, aquece e relaxa o corpo e a mente
                  </p>                   
                </div>
            </div>

            <div className={styles.details_container1}>
                <div className={styles.form}>
                  <h1 style={{fontSize: '50px'}}>Day Spa</h1>
                  <p style={{fontSize: '20px'}}>
                    Massagem anti-estresse aplicada com óleos. Terapia realizada em todo o corpo, combinando movimentos de deslizamento, amassamento, rolamento e percussão.
                  </p>                
                </div>
                <img src={spaDay} alt="Lotus" width={350} height={400}/>
            </div>

            <div className={styles.details_container1}>
              <img src={diaNoiva} alt="Lotus" width={350} height={400}/>
                <div className={styles.form}>
                  <h1 style={{fontSize: '50px'}}>Dia da Noiva</h1>
                  <p style={{fontSize: '20px'}}>
                    O dia esperado, o coração bate mais forte e a emoção toma conta de todos os envolvidos. O dia do casamento pode causar muita ansiedade e por este motivo é tão importante um bom e elaborado dia da noiva.
                    Momento em que você se prepara para encontrar o seu amado e selar esse amor através do matrimônio, esse dia tem que ser perfeito! 
                  </p>                
                </div>
                
            </div>
          </ContainerHome>
        </div>
    </>
  )
}

export default Services