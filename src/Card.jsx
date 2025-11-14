import profilelana from './assets/lana.jfif';


function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilelana} alt="profile picture"></img>
      <h2 className="card-title">Card Title</h2>
      <p className="card-description">This is a description of the card content.</p>
    </div>
  );
}

export default Card;