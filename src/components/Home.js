import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
          <div className='row'>
            <div className='column'>
              <div className='home'>
                <h1>"say what you meme...meme what you say"</h1>
                <h2> - memeboi </h2>
                <h3>Where baby memes are born...be great out there kid.</h3>
                <p>
                  Become a member in order to access your own log of saved memes!
                </p>
                  <div className='btn-container'>
                    <button className="button">Sign Up</button>
                    <button className="button">Sign In</button>
                  </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;
