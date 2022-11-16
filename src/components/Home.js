import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
          <div className='row'>
            <div className='column'>
              <div className='home'>
                <h1>"say what you meme...meme what you say"</h1>
                <h2> - memeboi </h2>
                <h3>Where baby memes are born...be great out there.</h3>
                <p>
                  Become a member in order to access your own log of saved memes!
                </p>
                  <div className='btn-container'>
                    <Link to="/signup" className="button">Sign Up</Link>
                    <Link to='/login' className="button">Log In</Link>
                  </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;
