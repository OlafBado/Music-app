import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { SearchBarProps, Song } from '../store'

const SearchBar = ({ songs, setSearchResults }: SearchBarProps) => {
    const handleSubmit = (e: React.FormEvent) => e.preventDefault()
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) return setSearchResults(songs)

        const resultsArray = songs.filter(song => 
            song["im:artist"].label.toLowerCase().includes(e.target.value.toLowerCase())
            || song.category.attributes.label.toLowerCase().includes(e.target.value.toLowerCase())
            || song["im:name"].label.toLowerCase().includes(e.target.value.toLowerCase()))

        setSearchResults(resultsArray)
    }

    return (
        <form 
            className="input"
            onSubmit={handleSubmit}
            data-testid="form"
        >
            <input
                className="input-field"
                placeholder="Search albums"
                type="text"
                onChange={handleSearchChange}
            />
            <button className="input-submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}

export default SearchBar