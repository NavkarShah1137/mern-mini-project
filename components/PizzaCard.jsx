import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Cheese Pizza</h1>
      <span className={styles.price}>₹500</span>
      <p className={styles.desc}>
        Exciting cheese pizza with delight mozrella cheese served in 2 pieces.
      </p>
    </div>
  );
};

export default PizzaCard;
