import styles from "./Rating.module.css";

const Rating = ({ rating }) => {
    return (
        <span className={styles.dot}>
            <span className={styles.innerCircle}>
                <span className={styles.procenat}>{rating}</span>
                <span className={styles.percent}></span>
            </span>
        </span>
    )
}

export { Rating };