import PropTypes from 'prop-types';
import thumbsUpIcon from '../../assets/img/thumbs-up.svg';
import thumbsDownIcon from '../../assets/img/thumbs-down.svg';

const roundVotes = (votes) => Math.round(votes * 10) / 10;

const GaugeBar = ({ className, votes }) => {
  const totalVotes = votes.positive + votes.negative;

  let positivePercent = (votes.positive * 100) / totalVotes;
  let negativePercent = (votes.negative * 100) / totalVotes;
  let positiveValue = positivePercent;
  let negativeValue = negativePercent;

  if (!votes.positive && !votes.negative) {
    positivePercent = 50;
    negativePercent = 50;
    positiveValue = 0;
    negativeValue = 0;
  }

  return (
    <div className={className}>
      <div
        className="gauge-bar__positive"
        style={{ width: `${positivePercent}%` }}
      >
        <div className="gauge-bar__percentage--positive">
          <img src={thumbsUpIcon} alt="Thumbs Down" />
          <span>{roundVotes(positiveValue)}%</span>
        </div>
      </div>
      <div
        className="gauge-bar__negative"
        style={{ width: `${negativePercent}%` }}
      >
        <div className="gauge-bar__percentage--negative">
          <span>{roundVotes(negativeValue)}%</span>
          <img src={thumbsDownIcon} alt="Thumbs Up" />
        </div>
      </div>
    </div>
  );
};

GaugeBar.defaultProps = {
  className: '',
  votes: { positive: 50, negative: 50 },
};

GaugeBar.propTypes = {
  className: PropTypes.string,
  votes: PropTypes.object,
};

export default GaugeBar;
