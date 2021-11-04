import './filter.css';

const Filter = (props) => {
    return (
        <div className="filter">
            <div className="filterR">
                <span className="filterText">Filter Products : </span>
                <select className="filterProduct" name="filter" onChange={props.filterChange}>
                    <option value="mostWanted" className="filterMethod">Par plus apprécié</option>
                    <option value="bestSales" className="filterMethod">Par meilleurs ventes</option>
                </select>
            </div>
            <div className="filterL">
                <span className="filterText">Sort Products : </span>
                <select className="filterProduct" name="sort" onChange={props.sortChange}>
                    <option value="recent" className="sortMethod">Récent</option>
                    <option value="asc" className="sortMethod">Prix Croissant</option>
                    <option value="desc" className="sortMethod">Prix Décroissant</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
