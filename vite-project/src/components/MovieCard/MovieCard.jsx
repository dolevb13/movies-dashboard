import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import Tooltip from '@mui/material/Tooltip';
import { setIsFiltered } from '../../store/moviesSlice';
import { propTypes } from './MovieCard.propTypes';
import './MovieCard.scss';

const MovieCard = ({id, title, image, releaseYear}) => {
    const dispatch = useDispatch();

    return (
        <div className='movie-card-container'>
            <div className='movie-card-icons'>
                <div>
                    <Tooltip title='More Information' arrow>
                        <Link to={id}>
                            <LaunchIcon className='launch-icon' onClick={() => dispatch(setIsFiltered(false))}/>
                        </Link>
                    </Tooltip>
                </div>
            </div>
            <div className='movie-card-image-container'>
                <img src={image}/>
            </div>
            <div className='movie-card-content'>
                <h3>{title}</h3>
                <div>{releaseYear}</div>
            </div>
        </div>
    )
}

MovieCard.propTypes = propTypes;

export default MovieCard;