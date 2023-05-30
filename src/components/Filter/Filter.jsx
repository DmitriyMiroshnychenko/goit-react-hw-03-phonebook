import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export function Filter({ onFilterInputChange, value }) {
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onFilterInputChange}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  onFilterInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
