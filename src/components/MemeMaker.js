import React from 'react';
import './MemeMaker.css';

class MemeMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topTxt: '',
      bottomTxt: '',
      allPix: [],
      randomPic: 'https://i.imgflip.com/c2qn.jpg'
    }
  }

  componentDidMount = () => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(picJson => {
        const { memes } = picJson.data
        this.setState({ allPix: memes });
      });
    }

  handleClick = (e) => {
    e.preventDefault()
    const randomInd = Math.floor(Math.random() * this.state.allPix.length)
    const randomMeme = this.state.allPix[randomInd].url
    this.setState({ randomPic: randomMeme }, () => {
      console.log('New Pic Loaded');
    });
  }

  _updateField = (field, val) => {
    this.setState({ [field]: val }, () => {
      console.log(`${field} = ${val}`) ;
    });
  }

  render() {
    return (
      <div className='row'>
        <div className='leftBox column'></div>
          <div className='midBox column'>
            <div className='meme'>
              <h2 className="topTxt">{this.state.topTxt}</h2>
              <img src={this.state.randomPic} alt="" className='img'/>
              <h2 className="bottomTxt">{this.state.bottomTxt}</h2>
            </div>
            <form className='form' onSubmit={this._submitForm}>
              <button className="button" onClick={this.handleClick}>New Pic</button>
              <input 
                type="type" 
                placeholder='Top Text' 
                value={this.state.topTxt} 
                onChange={(e) => {
                  this._updateField('topTxt', e.target.value)
                }}/>
              <input 
                type="text" 
                placeholder='Bottom Text' 
                value={this.state.bottomTxt}
                onChange={(e) => {
                  this._updateField('bottomTxt', e.target.value)
                }}/>
              <input className="button" type="submit"/>
            </form>
          </div>
        <div className='rightBox column'></div>
      </div>
    );
  }
}

export default MemeMaker;