import s from './searchContact.module.css';

const SearchContact = ({ searchValue, handleChange }) => {
  return (
    <div className={s.searchWrap}>
      <label>
        Find contact by name
        <input
          type="text"
          name="filter"
          value={searchValue}
          required
          onChange={e => handleChange(e)}
        />
      </label>
    </div>
  );
};

export default SearchContact;
