import PropTypes from "prop-types";

export default function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return(
        <form>
            <input
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)}
                />
        <label>
            <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e)=> onInStockOnlyChange(e.target.check)}/>
               {' '}
                only show product in stock !!! 
            </label>
        </form>
    )
}