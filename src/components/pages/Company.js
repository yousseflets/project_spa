import styles from './Company.module.css'
import logo from "../../img/quem-somos-home.jpg";

import ContainerHome from '../layout/ContainerHome'


function Company() {

  return (
    <>
        <div className={styles.project_details}>
          <ContainerHome customClass="column">
            <div className={styles.details_container}>
            <img src={logo} alt="Lotus" width={350} height={550}/>
                <div className={styles.form}>
                <h1 style={{fontSize: '70px'}}>Lotus Spa</h1>
                  <p style={{fontSize: '20px'}}>
                    O Lotus Spa é uma clínica especializada em massagem sensual. Criamos técnicas exclusivas baseadas em massoterapia sensual e técnicas tântricas capazes de transformar sua energia e te fazer alcançar um relaxamento profundo e bem-estar.
                    Nossa equipe é formada apenas por massagistas e terapeutas profissionais capazes de transformar sua energia e te fazer alcançar um relaxamento profundo e bem-estar.
                    Venha conhecer a melhor massagem sensual de Mogi das Cruzes. Atendemos homens, mulheres e casais.
                  </p>
                </div>
            </div>
          </ContainerHome>
        </div>
    </>
  )
}

export default Company