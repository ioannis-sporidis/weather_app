import { useState } from 'react';

const SearchBar = (props) => {
    const [location, setLocation] = useState("Pittsburgh, PA")

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(location)

    }
    return (
        <section>
            <form onSubmit={onSubmitHandler}>
                <button type="submit">Search</button>
                <input id="searchInput" name="search" placeholder="ex. Pittsburgh, PA" value={location} onChange={e => setLocation(e.target.value)}></input>
            </form>
        </section>

    )
}

export default SearchBar;