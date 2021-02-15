import { Picture } from "./Picture";
import { MovieInfo } from "./MovieInfo";

const MovieCard = ({ movie }) => {

    //form
    // divItem.append(showFormBtn(movie.id));
    // divItem.append(showForm(movie.id));
    return (
        <div className="item1">
            <Picture id={movie.id} />
            <MovieInfo
                title={movie.title}
                // description={movie.description}
                date={movie.date}
                rating={movie.rating}
            />
        </div>
    )
};

export { MovieCard };