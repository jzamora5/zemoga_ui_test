import PropTypes from 'prop-types';
import Thumbs from './Thumbs';
import Voting from './Voting';
import GaugeBar from './GaugeBar';
import '../../assets/styles/Main/Card.scss';
import EllipsisText from 'react-ellipsis-text';
import { useMediaQuery } from 'react-responsive';

const remoteImgURL =
  'https://raw.githubusercontent.com/jzamora5/assets/main/zemoga';

const GRADIENT =
  'no-repeat 35px/100% linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%), ';

const Card = ({ cardData, mode }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1099 });
  const isDesktop = useMediaQuery({ query: '(min-device-width: 1100px)' });

  let gradient = '';
  let bgSize = 'center / cover';

  const titleThumbType =
    cardData.votes.positive >= cardData.votes.negative ? 'up' : 'down';

  let imageName = cardData.picture.split('.png')[0];
  const bgOffset = isDesktop ? '0px' : '-27px';

  if (mode === 'list') {
    imageName += '-small';
    gradient = GRADIENT;
    bgSize = `${bgOffset} / contain no-repeat `;
  }

  const backgroundImage = `${remoteImgURL}/${imageName}.png`;
  // const backgroundImage = `-webkit-image-set(url("${remoteImgURL}/${imageName}.png") 1x, url("${remoteImgURL}/${imageName}@2x.png") 2x)`;

  const inlineStyleArticle = {
    background: `${gradient}url(${backgroundImage}) ${bgSize}`,
  };

  const cardTitleLengthDependingMedia = () => {
    let length = 24;

    if ((isTablet && mode === 'grid') || (isDesktop && mode === 'list')) {
      length = 80;
    } else if (isDesktop && mode === 'grid') {
      length = 24;
    }

    return length;
  };

  const cardDescLengthDependingMedia = () => {
    let length = 60;

    if (isDesktop && mode === 'list') length = 80;

    return length;
  };

  return (
    <article className={`card--${mode}`} style={inlineStyleArticle}>
      <div className="card__body">
        <div className="card__title">
          <Thumbs type={titleThumbType} />
          <EllipsisText
            text={cardData.name}
            length={cardTitleLengthDependingMedia()}
          />
        </div>
        <div className="card__desc">
          <EllipsisText
            text={cardData.description}
            length={cardDescLengthDependingMedia()}
          />
        </div>
        <p className="card__category">{cardData.category}</p>
        <Voting className="card__voting" id={cardData.id} />
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
