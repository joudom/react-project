import React from 'react';
import './Log.css';

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memeObjArr: JSON.parse(sessionStorage.getItem('meme')) ?? [],
      // savedBottomTxt: sessionStorage.getItem('bottomTxt'),
      // savedRandomPic: sessionStorage.getItem('randomPic')
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='column'>
          <div className='log'>
            <h1>your log</h1>
            <div className="grid-container">
              {this.state.memeObjArr.map((meme, i) => {
                return (
                  <div key={i} className="grid-item memeBox">
                    <h4 className="savedTopTxt">{meme.topTxt}</h4>
                    <img src={meme.img} alt="" className='savedImg'/>
                    <h4 className="savedBottomTxt">{meme.bottomTxt}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Log;
