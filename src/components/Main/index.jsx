import { connect } from 'react-redux';
import CardsList from './CardsList';

const Main = (props) => {
  return (
    <main role="main">
      <CardsList data={props.data} />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, null)(Main);
