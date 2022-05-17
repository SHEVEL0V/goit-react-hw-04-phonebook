import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './filter.module.css';

export default function Filter({ onInputFilter }) {
  const [value, setValue] = useState('');

  const onCange = e => {
    const { value } = e.target;
    setValue(value);
    onInputFilter(value);
  };
  return (
    <div className={s.thamb}>
      <label>
        <p className={s.text}>Find contacts by name:</p>
        <input
          className={s.input}
          tyte="text"
          name="filter"
          onChange={onCange}
          value={value}
        ></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  onInputFilter: PropTypes.func.isRequired,
};
