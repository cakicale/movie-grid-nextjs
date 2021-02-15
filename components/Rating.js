const Rating = ({ rating }) => {
    return (
        <>
            <span className="dot"></span>
            <span className="inner-circle">
                <span className="procenat">{rating}</span>
                <span className="percent"></span>
            </span>
        </>
    )
}

export { Rating };