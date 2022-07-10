import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>import React, { useState, useEffect } from 'react';
import {data} from './data.js'
import './App.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  )
}

function App() {
  
  const [loading, setLoading] = useState(false)
  const [readMore, setReadMore] = useState(false)
  const [tours, setTours] = useState(data)

  useEffect(()=> {
    
  })
  
  const removeTour = (id) => {
    let newTour = tours.filter((tour) => id !== tour.id)

    setTours(newTour)
  }

  if(tours.length === 0) {
    return (
      <div className="refresh-page">
        <h1>Refresh Page</h1>
        <button onClick={()=> setTours(data)}>Refresh</button>
      </div>
    )
  }
  
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Our Tours</h1>
          <div className="underline"></div>
        </div>
        {
          tours.map(({id, img, heading, description, price})=> {
            return(
              <div className="tours" key={id}>
                <img src={img} alt=""/>
                <div className="info">
                  <div className="infos">
                    <h4>{heading}</h4>
                    <p>{price}</p>
                  </div>
                  <p>
                    {readMore ? description : `${description.substring(0, 200)}...`}
                    <button className="show-more" onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less' : "Show more"}</button> 
                  </p>
                  <button onClick={()=> removeTour(id)} className="delete-btn">Not Interested</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
