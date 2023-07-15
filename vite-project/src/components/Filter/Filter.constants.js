const genres = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'History', 'Sci-Fi', 'Thriller']; 

const currentYear = 2023;
const startYear = 1930;
const years = Array.from({length: currentYear - startYear + 1}, (_, index) => startYear + index);

export const formData = {
    genre: genres,
    year: years,
}
