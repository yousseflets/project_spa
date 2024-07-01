import { FaWhatsapp } from 'react-icons/fa';
import styles from './Contact.module.css'

import { CiPhone } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";


function Contact() {

  return (
    <>
        <div className={styles.project_details}>
            <div className={styles.details_container1}>
                <div className={styles.formContact}>
                  <h1 style={{fontSize: '30px'}}>Endereço:</h1>
                  <p style={{fontSize: '16px'}}>
                    Rua Jayr de Lima Ferreira, 100 - Jd Cintia, Mogi das Cruzes - SP
                  </p>         
                  <p style={{fontSize: '16px'}}>
                  <CiPhone />  (11) 2094-9834
                  </p>                   
                  <p style={{fontSize: '16px'}}>
                  <FaWhatsapp /> (11) 97618-5147
                  </p>                   
                  <p style={{fontSize: '16px'}}>
                  <MdOutlineAlternateEmail  /> spa.youssef@geradornv.com.br
                  </p>             
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact