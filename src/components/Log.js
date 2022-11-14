import React from 'react';
import './Log.css';

class Log extends React.Component {

  myFunction() {
    var x = sessionStorage.getItem("test1");
    document.getElementsByClassName("log").innerHTML = x;
  } 

    render() {
        return (
         <div className='row'>
            <div className='column'>
              <div className='log'>
                <h1>your log</h1>
                <div className="grid-container">
                  <div className="grid-item">1</div>
                  <div className="grid-item">2</div>
                  <div className="grid-item">3</div>
                  <div className="grid-item">4</div>
                  <div className="grid-item">5</div>
                  <div className="grid-item">6</div>
                  <div className="grid-item">7</div>
                  <div className="grid-item">8</div>
                  <div className="grid-item">9</div>
                  <div className="grid-item">10</div>
                  <div className="grid-item">11</div>
                  <div className="grid-item">12</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Log;
