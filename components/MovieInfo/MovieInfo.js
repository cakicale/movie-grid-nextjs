import { Rating } from "../Rating/Rating";
import styles from "./MovieInfo.module.css"

const MovieInfo = ({ title, description, date, rating }) => {
    //const movieRating = Rating(rating);
    return (
        <div className="text">
            <Rating rating={rating} />
            <h2>
                {title}
                <a href="#" />
            </h2>
            <p className={styles.date}>{date}</p>
            <p className={styles.overview}>{description}</p>
        </div>
    )
}

export { MovieInfo };