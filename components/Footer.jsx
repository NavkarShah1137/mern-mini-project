import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Have a nice day !
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            KJSCE Canteen
            <br /> Somaiya Campus
            
          </p>
          <p className={styles.text}>
            SISMSR Canteen
            <br /> Somaiya Campus
           
          </p>
          <p className={styles.text}>
            KJSIM Canteen
            <br /> Somaiya Campus
           
          </p>
          <p className={styles.text}>
            SKSC Canteen
            <br /> Somaiya Campus
          
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 10:00 – 17:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> CLOSED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
