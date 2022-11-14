import React from 'react';
import { Link } from 'react-router-dom';
import './NoPage.css';

class NoPage extends React.Component {
    render() {
        return (
         <div className='row'>
            <div className='column'>
              <div className='NoPage'>
                <h1>Page Not Found</h1>
                    <center>
                      <Link to='/' className='link'>Return to Home</Link>  
                    </center>
              </div>
            </div>
          </div>
        );
    }
}

export default NoPage;