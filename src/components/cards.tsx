
const Cards = () => {
  return (
    <div className='project-container'>
      <h2 className='project-title'>My <div className='violet-project'>projects</div></h2>
      <div className="cards">
        <div className="card" onClick={() => console.log('Carte 1 cliquée')}>
          <h3>Carte 1</h3>
          <p>Description de la carte 1</p>
        </div>
        <div className="card" onClick={() => console.log('Carte 2 cliquée')}>
          <h3>Carte 2</h3>
          <p>Description de la carte 2</p>
        </div>
        <div className="card" onClick={() => console.log('Carte 3 cliquée')}>
          <h3>Carte 3</h3>
          <p>Description de la carte 3</p>
        </div>
        <div className="card" onClick={() => console.log('Carte 4 cliquée')}>
          <h3>Carte 4</h3>
          <p>Description de la carte 4</p>
        </div>
        <div className="card" onClick={() => console.log('Carte 5 cliquée')}>
          <h3>Carte 5</h3>
          <p>Description de la carte 5</p>
        </div>
        <div className="card" onClick={() => console.log('Carte 6 cliquée')}>
          <h3>Carte 6</h3>
          <p>Description de la carte 6</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;