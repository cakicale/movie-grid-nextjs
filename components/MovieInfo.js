import { Rating } from "./Rating";

const MovieInfo = ({title, description, date, rating}) => {
    //const movieRating = Rating(rating);
    return (
        <div className="text">
            <Rating rating={rating} />
            <h2>
                {title}
                <a href="#" />
            </h2>
            <p className="date">{date}</p>
            <p className="overview">{description}</p>
        </div>
    )
}

export { MovieInfo };