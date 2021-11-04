import './search.css';
import { Search } from "@mui/icons-material";

const SearchContainer = () => {
    return (
        <div className="search">
            <Search style={{color : "#77D970"}}/>
            <input type="text" name="search" placeholder="recherche" className="Input"/>
        </div>
    )
}

export default SearchContainer
