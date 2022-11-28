import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Somaiya Canteen</h1>
      <p className={styles.desc}>
        Somaiya University Canteen provides you the best quality food on the campus for students
        , faculties , parents and everyone present on the campus
      </p>
      <div className={styles.wrapper}>
          <PizzaCard/>
      </div>
    </div>
  );
};

export default PizzaList;
