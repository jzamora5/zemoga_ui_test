import Thumbs from './Thumbs';

export const Voting = ({ className }) => {
  const voteMsg = 'Vote Now';

  return (
    <>
      <div className={className}>
        <Thumbs type="up" className="voting__thumbsUp" />
        <Thumbs type="down" className="voting__thumbsDown" />
        <button className="voting__button">
          <span>{voteMsg}</span>
        </button>
      </div>
    </>
  );
};

export default Voting;