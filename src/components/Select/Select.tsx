import React from 'react';
import ReactSelect, { ContainerProps, GroupBase, StylesConfig } from 'react-select';

import styles from './Select.module.scss';

const options = [
  { value: 'react', label: 'React' },
  { value: 'github', label: 'Github' },
  { value: 'graphql', label: 'GraphQL' },
];

enum theme {
  green = '#2ecc71',
  red = '#e74c3c',
  blue = '#3498db',
  yellow = '#f1c40f',
  purple = '#8e44ad',
  turquoise = '#1abc9c',
}

// const getOptionColor = (state: ContainerProps<unknown, boolean, GroupBase<unknown>>) => {
//   // switch (state) {
//   //   case state.isFocused:
//   //     return theme.yellow;
//   //   case state.is:
//   //     newRangeEnd = rangeEnd.plusWeeks(diff);
//   //     break;
//   //   case state.month:
//   //     newRangeEnd = rangeEnd.plusMonths(diff);
//   //     break;
//   //   default:
//   //     return 'inherit';
//   // }
// };

const customStyles: StylesConfig = {
  container: (provided, state) => ({
    ...provided,
    textAlign: 'justify',
    width: '40vw',
  }),
  option: (provided, state) => ({
    ...provided,
    // background: state.isFocused ? color.yellow : 'white',
    // textAlign: 'justify',
  }),
  control: (provided, state) => ({
    ...provided,
    // textAlign: 'justify',
  }),
};
type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const Select: React.FC<Props> = (props: Props) => {
  const { setSearchTerm } = props;
  // if (!isLoading && !data) {
  //   return <div>Sorry no Selects availible for that search</div>;
  // }
  // console.log(data);
  return (
    <div className={styles.select}>
      <ReactSelect classNamePrefix="react-select" options={options} styles={customStyles} />
    </div>
  );
};

export default Select;
