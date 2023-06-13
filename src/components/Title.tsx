import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.container}>
      <img src="./assets/images/banner5.png" alt="" />
      <div className={styles.titleCtn}>
        <h1>MONKFISH, SEAWEED, FISHING NET</h1>
        <p>A completely original game!</p>
      </div>
    </div>
  );
};

export default Title;
