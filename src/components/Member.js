import styles from './Member.module.css';

const Member = ({ name }) => {
  return (
    <div className={styles.root}>
        <div className={styles.member}>
            {name}
        </div>
    </div>
  );
};

export default Member;
