import PropTypes from 'prop-types';
import Thumbs from './Thumbs';
import Voting from './Voting';
import GaugeBar from './GaugeBar';
import '../../assets/styles/Main/Card.scss';
import EllipsisText from 'react-ellipsis-text';

const remoteImgURL =
  'https://raw.githubusercontent.com/jzamora5/assets/main/zemoga';

const Card = ({ cardData, mode }) => {
  console.log(cardData.picture);

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
          <Thumbs type="down" />
          <h2>{cardData.name}</h2>
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
};

Card.propTypes = {
  cardData: PropTypes.object,
  mode: PropTypes.string,
};

export default Card;
