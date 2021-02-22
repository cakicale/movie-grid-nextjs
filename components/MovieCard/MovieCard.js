import { Picture } from "../Picture/Picture";
import { MovieInfo } from "../MovieInfo/MovieInfo";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {

    //form
    // divItem.append(showFormBtn(movie.id));
    // divItem.append(showForm(movie.id));
    return (
        <div className={styles.item1}>
            <Picture id={movie.id} />
            <MovieInfo
                title={movie.title}
                description={movie.description}
                date={movie.date}
                rating={movie.rating}
            />
        </div>
    )
};

export { MovieCard };