export function Front() {
    return (
        <> 
        <container className="front_container"> 
        <div className="card" id="Card1">
         <h2>Front end Dev...</h2>
        <div className="card__content">
          <p className="card__title">Front end Dev
          </p><p className="card__description">stack : MERN </p>
        </div>
      </div>

        <div className="card" id="Card2">
         <h2>Back end Dev...</h2>
        <div className="card__content">
          <p className="card__title">Back end Dev
          </p><p className="card__description">Going on MERN stack also ...</p>
        </div>
      </div>

      <div className="card" id="Card3">
         <h2>API dev..</h2>
        <div className="card__content">
          <p className="card__title">API deployment 
          </p><p className="card__description">just API things</p>
        </div>
      </div>
   
      </container>
   </>
        
    )
}

