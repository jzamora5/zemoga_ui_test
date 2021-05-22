import Thumbs from './Thumbs';
import '../../assets/styles/Main/Card.scss';

const remoteImgURL =
  'https://raw.githubusercontent.com/jzamora5/assets/main/zemoga';

const Card = ({ cardData }) => {
  console.log(cardData.picture);
  return (
    <div className="card">
      <img src={`${remoteImgURL}/${cardData.picture}`} alt={cardData.picture} />
      <Thumbs type="up" />
    </div>
  );
};

export default Card;
