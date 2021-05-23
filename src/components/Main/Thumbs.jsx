import PropTypes from 'prop-types';
import '../../assets//styles/Main/Thumbs.scss';
import SASSvariables from '../../assets/styles/Vars.module.scss';
import thumbsUpIcon from '../../assets/img/thumbs-up.svg';
import thumbsDownIcon from '../../assets/img/thumbs-down.svg';
import classNames from 'classnames';

const UP = 'up';
const positiveColor = SASSvariables['color-green-positive'];
const negativeColor = SASSvariables['color-yellow-negative'];

const Thumbs = ({ type, active, clickable, className }) => {
  const thumbsIcon = type === UP ? thumbsUpIcon : thumbsDownIcon;
  const thumbsBGColor = type === UP ? positiveColor : negativeColor;

  const inlineThumbsStyle = {
    backgroundColor: thumbsBGColor,
    border: active ? '2px solid white' : '',
  };

  if (clickable) inlineThumbsStyle.cursor = 'pointer';

  return (
    <div className={classNames('thumbs', className)} style={inlineThumbsStyle}>
      <img src={thumbsIcon} alt={`Thumbs ${type}`} />
    </div>
  );
};

Thumbs.defaultProps = {
  type: 'up',
  active: false,
  clickable: false,
  className: '',
};

Thumbs.propTypes = {
  type: PropTypes.string,
  active: PropTypes.bool,
  clickable: PropTypes.bool,
  className: PropTypes.string,
};

export default Thumbs;
