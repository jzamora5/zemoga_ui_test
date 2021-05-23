const selectColor = '#333333';

const generalSelectStyles = {
  border: `2px solid ${selectColor}`,
  textAlign: 'center',
};

export const customStyles = {
  control: () => ({
    ...generalSelectStyles,
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  dropdownIndicator: (provided) => ({
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    ...generalSelectStyles,
    cursor: 'pointer',
    background: state.isSelected && 'transparent',
    color: state.isSelected && selectColor,
    '&:hover': {
      background: 'transparent',
    },
    borderTop: '2px',
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 0,
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
};

export const options = [
  { value: 'list', label: 'List' },
  { value: 'grid', label: 'Grid' },
];
