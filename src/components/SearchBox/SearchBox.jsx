import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.container}>
      <p className={css.searchTitle}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        placeholder="Enter contact name..."
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
