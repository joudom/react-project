import React from 'react';
import './Lab.css';

class Lab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topTxt: '',
      bottomTxt: '',
      allPix: [],
      randomPic: 'https://i.imgflip.com/c2qn.jpg',
      savedPic: ''
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

  handleFormSubmit = () => {
    const { topTxt, bottomTxt, savedPic } = this.state;
    localStorage.setItem('topTxt', topTxt);
    localStorage.setItem('bottomTxt', bottomTxt);
    localStorage.setItem('savedPic', JSON.stringify(savedPic));
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
            <form className='form' onSubmit={this.handleFormSubmit}>
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
              <button className="button">Save</button>
            </form>
          </div>
        <div className='rightBox column'></div>
      </div>
    );
  }
}

export default Lab;