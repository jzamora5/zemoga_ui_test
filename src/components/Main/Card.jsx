import PropTypes from 'prop-types';
import Thumbs from './Thumbs';
import Voting from './Voting';
import GaugeBar from './GaugeBar';
import '../../assets/styles/Main/Card.scss';
import EllipsisText from 'react-ellipsis-text';

const remoteImgURL =
  'https://raw.githubusercontent.com/jzamora5/assets/main/zemoga';

const Card = ({ cardData, mode }) => {
  const titleThumbType =
    cardData.votes.positive >= cardData.votes.negative ? 'up' : 'down';

  const backgroundImage = `${remoteImgURL}/${cardData.picture}`;

  return (
    <article
      className={`card--${mode}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="card__body">
        <div className="card__title">
          <Thumbs type={titleThumbType} />
          <EllipsisText text={cardData.name} length={24} />
        </div>
        <div className="card__desc">
          <EllipsisText text={cardData.description} length={60} />
        </div>
        <p className="card__category">{cardData.category}</p>
        <Voting className="card__voting" category={cardData.category} />
        <GaugeBar className="card__gauge-bar" votes={cardData.votes} />
      </div>
    </article>
  );
};

Card.defaultProps = {
  cardData: {},
  mode: 'grid',
  id: '',
};

Card.propTypes = {
  cardData: PropTypes.object,
  mode: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
