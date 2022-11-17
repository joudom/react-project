import React from 'react';
import './Log.css';

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedTopTxt: sessionStorage.getItem('topTxt'),
      savedBottomTxt: sessionStorage.getItem('bottomTxt'),
      savedRandomPic: sessionStorage.getItem('randomPic')
    }
  }
    
    render() {
        return (
         <div className='row'>
            <div className='column'>
              <div className='log'>
                <h1>your log</h1>
                <div className="grid-container">
                  <div className="grid-item memeBox">
                    <h4 className="savedTopTxt">{this.state.savedTopTxt}</h4>
                    <img src={this.state.savedRandomPic} alt="" className='savedImg'/>
                    <h4 className="savedBottomTxt">{this.state.savedBottomTxt}</h4>
                  </div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Log;
