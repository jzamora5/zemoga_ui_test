import PropTypes from 'prop-types';
import thumbsUpIcon from '../../assets/img/thumbs-up.svg';
import thumbsDownIcon from '../../assets/img/thumbs-down.svg';
import '../../assets//styles/Main/Thumbs.scss';
import SASSvariables from '../../assets/styles/Vars.module.scss';

const UP = 'up';
const positiveColor = SASSvariables['color-green-positive'];
const negativeColor = SASSvariables['color-yellow-negative'];

const Thumbs = ({ type, active }) => {
  const thumbsIcon = type === UP ? thumbsUpIcon : thumbsDownIcon;
  const thumbsBGColor = type === UP ? positiveColor : negativeColor;

  const inlineThumbsStyle = {
    backgroundColor: `rgb(${thumbsBGColor})`,
    border: active ? '2px solid white' : '',
  };

  return (
    <div className="thumbs" style={inlineThumbsStyle}>
      <img src={thumbsIcon} alt={`Thumbs ${type}`} />
    </div>
  );
};

Thumbs.defaultProps = {
  type: 'up',
  active: false,
};

Thumbs.propTypes = {
  type: PropTypes.string,
  active: PropTypes.bool,
};

export default Thumbs;
