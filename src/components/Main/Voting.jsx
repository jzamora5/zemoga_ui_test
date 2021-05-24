import { useState } from 'react';
import PropTypes from 'prop-types';
import Thumbs from './Thumbs';
import '../../assets/styles/Main/Voting.scss';

export const Voting = ({ className, id }) => {
  const [vote, setVote] = useState(null);

  const voteMsg = vote === 'voted' ? 'Vote Again' : 'Vote Now';

  const handleVote = () => {
    if (vote === 'voted') {
      setVote(null);
    } else {
      setVote('voted');
      console.log(`Voted ${vote} for ${id}`);
    }
  };

  const buttonStyle = {};

  if (vote) buttonStyle.cursor = 'pointer';

  return (
    <>
      <div className={className}>
        {vote !== 'voted' && (
          <Thumbs
            type="up"
            className="voting__thumbsUp"
            clickable
            setVote={setVote}
            vote={vote}
            active={vote === 'up' ? true : false}
          />
        )}
        {vote !== 'voted' && (
          <Thumbs
            type="down"
            className="voting__thumbsDown"
            clickable
            setVote={setVote}
            vote={vote}
            active={vote === 'down' ? true : false}
          />
        )}
        <button
          className="voting__button"
          type="button"
          onClick={handleVote}
          disabled={!!!vote}
          style={buttonStyle}
        >
          <span>{voteMsg}</span>
        </button>
      </div>
    </>
  );
};

Voting.defaultProps = {
  className: '',
  id: '',
};

Voting.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Voting;
