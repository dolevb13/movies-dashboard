import SearchBar from '../SearchBar/SearchBar';
import './Headline.scss';

const Headline = () => {

    return (
        <div className='headline'>
            <h1>Movies Dashboard</h1>
            <div className='search-and-filter'>
                <SearchBar/>
            </div>
        </div>
    )
}

export default Headline;