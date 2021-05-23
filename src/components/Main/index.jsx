import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardsList from './CardsList';
import { getData } from '../../actions';
import Loader from 'react-loader-spinner';
import Select, { components } from 'react-select';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../../assets/styles/Main/Main.scss';
import triangle from '../../assets/img/triangle.svg';
import { useMediaQuery } from 'react-responsive';

const selectColor = '#333333';

const generalSelectStyles = {
  border: `2px solid ${selectColor}`,
  textAlign: 'center',
};

const customStyles = {
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

const options = [
  { value: 'list', label: 'List' },
  { value: 'grid', label: 'Grid' },
];

const Main = ({ getData, data, loading, error }) => {
  const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' });

  const [cardsMode, setCardsMode] = useState('list');

  const handleSelectChange = (selectedOption) => {
    setCardsMode(selectedOption.value);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props} className="main__select-arrow">
          <img src={triangle} alt="triangle icon" />
        </components.DropdownIndicator>
      )
    );
  };

  const loader = (
    <Loader
      type="TailSpin"
      color="rgba(0, 0, 0, 0.6)"
      height={100}
      width={100}
      style={{ textAlign: 'center' }}
    />
  );

  const cardListDependingMedia = () => {
    let mode = cardsMode;

    if (!isTablet) mode = 'grid';

    return <CardsList data={data} mode={mode} />;
  };

  return (
    <main role="main" className="main">
      <header className="main__header">
        <h2>Previous Rulings</h2>
        <Select
          onChange={handleSelectChange}
          options={options}
          styles={customStyles}
          components={{ DropdownIndicator, IndicatorSeparator: () => null }}
          className="main__select"
          classNamePrefix="main__select"
          defaultValue={options[0]}
        />
      </header>
      {error && <h2>{error}</h2>}
      {loading ? loader : cardListDependingMedia()}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  getData,
};

Main.defaultProps = {
  getData: () => {},
  data: [],
  loading: false,
  error: null,
};

Main.propTypes = {
  getData: PropTypes.func,
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
