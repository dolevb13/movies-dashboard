import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './MoviePage.scss';

const MoviePage = () => {
    const movies = useSelector(state => state.movies.all);
    const params = useParams();
    const movie = movies.find(movie => movie.id === params.movieId)
    const {title, image, description, genres, imDbRating: rating, runtimeStr: length, plot, stars} = movie
    const fullDetails = Object.entries({genres, rating, length, plot, stars})
        .map(([key, value]) => (<p key={key}><b>{key.slice(0, 1).toUpperCase() + key.slice(1)}:</b> {value}</p>))

    return (
        <div className='movie-page-container'>
            <div className='movie-page-header'>            
                <img src={image}/>
                <h2>{title}</h2>
                <h3>{description}</h3>
            </div>
            {fullDetails}
            <div className='movie-page-back-button'>
                <Link to='/'>Back to Dashboard</Link>
            </div>  
        </div>
    )
}

export default MoviePage;