import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMovies } from '../../store/moviesSlice';
import Headline from '../../components/Headline/Headline';
import Filter from '../../components/Filter/Filter';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetch('https://cyan-gorgeous-cygnet.cyclic.app/api/all-movies?key=jedimindtrick&count=250');
                const json = await data.json();
                dispatch(setMovies(json?.results));
            } catch (e) {
                console.log(e)
            }
        }
        fetchMovies().catch(console.error);
    }, [dispatch]);

    return (
        <>
            <Headline/>
            <Filter/>
            <MoviesList/>
        </>
    )
}

export default HomePage;