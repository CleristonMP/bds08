import './styles.css';

function FilterCard() {
  return (
    <div className="filter-card-component base-card">
      <select>
        <option value="Araguari">Araguari</option>
        <option value="Ituiutaba">Ituiutaba</option>
        <option value="Uberaba">Uberaba</option>
        <option value="Uberlândia">Uberlândia</option>
      </select>
    </div>
  )
}

export default FilterCard;
