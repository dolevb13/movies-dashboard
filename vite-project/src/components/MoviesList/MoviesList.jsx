import { useSelector } from 'react-redux';
import { FixedSizeGrid as Grid } from 'react-window';
import MovieCard from '../MovieCard/MovieCard';
import { SIZES } from './MoviesList.constants';

const MoviesList = () => {
    const movies = useSelector(state => state.movies.filtered);

  return (
	<Grid
        columnCount={window.innerWidth / SIZES.CARD_WIDTH}
        rowCount={Math.ceil(movies.length / (window.innerWidth / SIZES.CARD_WIDTH))}
        columnWidth={SIZES.CARD_WIDTH}
        rowHeight={SIZES.CARD_HEIGHT + SIZES.CARD_MARGIN}
        width={window.innerWidth}
        height={window.innerHeight - SIZES.HEADER_HEIGHT}
    >
        {({ columnIndex, rowIndex, style }) => {
          const movie = movies[rowIndex * Math.floor(window.innerWidth / SIZES.CARD_WIDTH) + columnIndex];
          return (
            <div style={style}>
              {movie && <MovieCard key={movie.id} id={movie.id} title={movie.title} image={movie.image} releaseYear={movie.description}/>}
            </div>
          );
        }}
      </Grid>
    )
};

export default MoviesList;

