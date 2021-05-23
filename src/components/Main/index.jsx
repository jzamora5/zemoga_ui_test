import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardsList from './CardsList';
import { getData } from '../../actions';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Main = ({ getData, data, loading, error }) => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const loader = (
    <Loader
      type="TailSpin"
      color="rgba(0, 0, 0, 0.6)"
      height={100}
      width={100}
      style={{ textAlign: 'center' }}
    />
  );

  return (
    <main role="main">
      <h2>Previous Rulings</h2>
      {error && <h2>{error}</h2>}
      {loading ? loader : <CardsList data={data} mode="grid" />}
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
