import React from 'react';
import './MemeMaker.css';

class MemeMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      allPics: [],
      randomPic: 'https://i.imgflip.com/30b1gx.jpg'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount = () => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(picJson => {
        const { memes } = picJson.data
        this.setState({ allPics: memes }, () => {
          console.log('new pic loaded');
        });
      });
    }

  _updateField = (key, val) => {
    this.setState({ [key]: val }, () => {
      console.log(`${key} = ${val}`) ;
    });
  }

  handleClick = (e) => {
    e.preventDefault()
    const randomInd = Math.floor(Math.random() * this.state.allPics.length)
    const randomMeme = this.state.allPics[randomInd].url
    this.setState({ randomPic: randomMeme })
  }

  render() {
    return (
      <div className='row'>
        <div className='column'>
          <div className='meme'>
              <h2 className="top">{this.state.topText}</h2>
              <img src={this.state.randomPic} alt="" className='img'/>
              <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
            <form className='form'>
              <button onClick={this.handleClick}>New Pic</button>
              <input 
                type="text" 
                name='topText'
                placeholder='Top Text' 
                defaultValue={this.state.topText} 
                onChange={(event) => {
                  this._updateField('Top Text', event.target.value)
                }}/>
              <input 
                type="text" 
                placeholder='Bottom Text' 
                defaultValue={this.state.bottomText}
                onChange={(event) => {
                  this._updateField('Bottom Text', event.target.value)
                }}/>
              <input type="submit"/>
            </form>
        </div>
      </div>
    );
  }
}

export default MemeMaker;