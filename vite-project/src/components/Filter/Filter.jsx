import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {FormControl, InputLabel, MenuItem, Rating, Select } from '@mui/material';
import { getMoviesByFilter, setAllMovies, setIsFiltered } from '../../store/moviesSlice';
import { formData } from './Filter.constants';
import './Filter.scss';

const Filter = () => {
    const dispatch = useDispatch();
    const [filterVisible, setFilterVisible] = useState(false);
    const [filterBy, setFilterBy] = useState('');
    const [filterTypes, setFilterTypes] = useState({genre: '', year: '', rating: ''});

    const handleIconClick = () => {
        setFilterVisible(prevState => !prevState);
        dispatch(setIsFiltered(true));
        if (filterVisible && filterBy === '') {
            dispatch(setIsFiltered(false));
        }
    }

    const handleFilterBySelection = e => {
        dispatch(setAllMovies());
        setFilterBy(e.target.value);
        setFilterTypes({genre: '', year: '', rating: 0});
        if (!e.target.value) {
            dispatch(setAllMovies());
        }
    }

    const handleFilterTypeSelection = (e, type, newValue = null) => {        
        if (type !== 'rating') {
            setFilterTypes(prevState => ({...prevState, [type]: e.target.value}));
            dispatch(getMoviesByFilter({type, value: e.target.value}))
        } else {
            setFilterTypes(prevState => ({...prevState, [type]: newValue})); 
            dispatch(getMoviesByFilter({type, value: newValue}));
        }        
    }

    return (
        <>
            <FilterAltIcon className='filter-icon' onClick={handleIconClick}/>
            {filterVisible && <div className='filter-container'>
                <FormControl className='filter-selection' variant="standard">
                    <InputLabel>Filter By</InputLabel>
                    <Select value={filterBy} onChange={handleFilterBySelection} label="Filter By">
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={'genre'}>Genre</MenuItem>
                        <MenuItem value={'year'}>Year</MenuItem>
                        <MenuItem value={'rating'}>Rating</MenuItem>
                    </Select>
                </FormControl>
                {(filterBy === 'genre' || filterBy === 'year') && (
                    <FormControl className={`${filterBy}-selection`} variant="standard">
                        <InputLabel>{filterBy.slice(0, 1).toUpperCase() + filterBy.slice(1)}.</InputLabel>
                        <Select value={filterTypes[filterBy]} onChange={(e) => handleFilterTypeSelection(e, filterBy)}>
                            {formData[filterBy].map(item => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
                        </Select>
                    </FormControl>
                )}
                {filterBy === 'rating' && (
                    <Rating value={filterTypes.rating} onChange={(e, newValue) => handleFilterTypeSelection(e, 'rating', newValue)} precision={0.5}/>
                )}
            </div>} 
        </>
    )
}

export default Filter;