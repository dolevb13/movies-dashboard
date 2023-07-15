import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import { getMoviesBySearch } from '../../store/moviesSlice';
import { debounce } from './SearchBar.utils';
import './SearchBar.scss';

const SearchBar = () => {
    const isFiltered = useSelector(state => state.movies.isFiltered);
    const dispatch = useDispatch();
    const [searchBarVisible, setSearchBarVisible] = useState(false);

    const handleSearch = debounce(e => {
        const query = e.target.value.toLowerCase();
        dispatch(getMoviesBySearch(query));
    }, 500);

    const handleIconClick = () => {
        setSearchBarVisible(prevState => !prevState);
        if (searchBarVisible) {
            dispatch(getMoviesBySearch(''));
        }
    }

    return (
        <div className={classNames('search-bar-container', {'open': searchBarVisible})}>
            {searchBarVisible && <input type='text' className='search-bar' placeholder='Search' onChange={handleSearch}/>}
            <Tooltip title={isFiltered ? "Change 'Filter By' to 'None' and close the filter to allow search" : ''} arrow>
                <span>
                    <SearchIcon className={classNames('search-bar-icon', {'disabled': isFiltered})} onClick={handleIconClick}/>
                </span>
            </Tooltip>
        </div>
    )
}

export default SearchBar;