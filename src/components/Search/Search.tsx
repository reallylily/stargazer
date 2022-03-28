import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { UseMutateFunction } from 'react-query';
import ReactSelect, { StylesConfig } from 'react-select';

import styles from './Search.module.scss';
import { options } from './data';
import ApiTopic from 'api/search/types';

interface Option {
  value: string;
  label: string;
}

const customStyles: StylesConfig = {
  container: (provided) => ({
    ...provided,
    textAlign: 'justify',
    width: '40vw',
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    display: 'none',
  }),
};

type Props = {
  search: UseMutateFunction<ApiTopic, AxiosError, string>;
};

export const Search: React.FC<Props> = (props: Props) => {
  const { search } = props;

  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);
  const [input, setInput] = React.useState<string>('');
  const [value, setValue] = React.useState<string>('');

  const clickHandler = () => {
    search(value);
  };

  useEffect(() => {
    if (selectedOption && selectedOption.value) {
      setInput(selectedOption.value);
      setValue(selectedOption.value);
    }
  }, [selectedOption, setValue]);

  useEffect(() => {
    if (input && !selectedOption) {
      setValue(input);
    }
  }, [input, selectedOption, setValue]);

  return (
    <div className={styles.search}>
      <div className={styles.select}>
        <ReactSelect
          options={options}
          defaultValue={value}
          onChange={setSelectedOption as (selected: unknown) => void}
          onInputChange={setInput}
          styles={customStyles}
        />
      </div>
      <button className={styles.button} type="button" onClick={clickHandler}>
        Search
      </button>
    </div>
  );
};

export default Search;
