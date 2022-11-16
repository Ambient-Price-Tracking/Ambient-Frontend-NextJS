import styles from "../styles/Pricetracker.module.css";
import React from "react";

const Pricetracker = () => {
  const [url, setUrl] = React.useState("");
  const [lowprice, setLowprice] = React.useState("");
  const [highprice, setHighprice] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(url);
        console.log(lowprice);
        console.log(highprice);
    }

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
        <button className={styles.btn1}>Amazon</button>
        <button className={styles.btn2}>Flipkart</button>
      <input
        type="text"
        className={styles.form_control1}
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        className={styles.form_control2}
        placeholder="Enter Low Price"
        value={lowprice}
        onChange={(e) => setLowprice(e.target.value)}
      />
      <input
        type="text"
        className={styles.form_control3}
        placeholder="Enter High Price"
        value={highprice}
        onChange={(e) => setHighprice(e.target.value)}
      />
      <buttom className={styles.btn}>Submit</buttom>
    </form>
  );
};

export default Pricetracker;
