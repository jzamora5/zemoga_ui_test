import PropTypes from 'prop-types';
import Thumbs from './Thumbs';
import Voting from './Voting';
import GaugeBar from './GaugeBar';
import '../../assets/styles/Main/Card.scss';
import EllipsisText from 'react-ellipsis-text';

const remoteImgURL =
  'https://raw.githubusercontent.com/jzamora5/assets/main/zemoga';

const GRADIENT =
  'no-repeat 20px/100% linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%), ';

const Card = ({ cardData, mode }) => {
  let gradient = '';
  let bgSize = 'center / cover';

  const titleThumbType =
    cardData.votes.positive >= cardData.votes.negative ? 'up' : 'down';

  let imageName = cardData.picture.split('.png')[0];

  if (mode === 'list') {
    imageName += '-small';
    gradient = GRADIENT;
    bgSize = '-27px / 30% no-repeat ';
  }

  const backgroundImage = `${remoteImgURL}/${imageName}.png`;

  const inlineStyleArticle = {
    background: `${gradient}url(${backgroundImage}) ${bgSize}`,
  };

  return (
    <article className={`card--${mode}`} style={inlineStyleArticle}>
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
