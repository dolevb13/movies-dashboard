import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        all: [],
        filtered: [],
        isFiltered: false,
    },
    reducers: {
        setMovies: (state, action) => { 
            state.all = [...action.payload] 
            state.filtered = state.all;
        },
        setAllMovies: state => {
            state.filtered = state.all;
        },
        getMoviesBySearch: (state, action) => {
            state.filtered = state.all.filter(movie => movie.title.toLowerCase().includes(action.payload))            
        },
        getMoviesByFilter: (state, action) => {
            state.filtered = state.all.filter(movie => {
                if (action.payload.type === 'genre') {
                    return movie.genres.replace(/\s/g, '').split(',').includes(action.payload.value);
                } else if (action.payload.type === 'year') {
                    return +(movie.description.replace(/[()]/g ,'')) === action.payload.value;
                } else if (action.payload.type === 'rating') {
                    return +movie.imDbRating >= +action.payload.value * 2;
                } else {
                    return movie;
                }
            })
        },
        setIsFiltered: (state, action) => {
            state.isFiltered = action.payload
        },
    },
})

export const { setMovies, setAllMovies, getMoviesBySearch, getMoviesByFilter, setIsFiltered } = moviesSlice.actions;

export default moviesSlice.reducer;