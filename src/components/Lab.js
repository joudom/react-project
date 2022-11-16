import React from 'react';
import './Lab.css';

class Lab extends React.Component {
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

  _updateTopTxt = (newTopTxt) => {
    this.setState({ topTxt: newTopTxt }, () => {
      console.log(`Top Text = ${newTopTxt}`) ;
    });
  }

  _updateBottomTxt = (newBottomTxt) => {
    this.setState({ bottomTxt: newBottomTxt }, () => {
      console.log(`Bottom Text = ${newBottomTxt}`) ;
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { topTxt, bottomTxt, randomPic } = this.state;
    sessionStorage.setItem('topTxt', topTxt);
    sessionStorage.setItem('bottomTxt', bottomTxt);
    sessionStorage.setItem('randomPic', randomPic);
    // let topTxt = document.getElementsByClassName('topTxt').value;
    // let randomPic = document.getElementsByClassName('img').value;
    // let bottomTxt = document.getElementsByClassName('bottomTxt').value;

    // const meme = {
    //   topTxt: topTxt,
    //   img: randomPic,
    //   bottomTxt: bottomTxt
    // }
    // sessionStorage.setItem(meme, JSON.stringify(meme));
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
                  console.log(e.target.value);
                  this._updateTopTxt(e.target.value)
                }}/>
              <input 
                type="text" 
                placeholder='Bottom Text' 
                value={this.state.bottomTxt}
                onChange={(e) => {
                  console.log(e.target.value);
                  this._updateBottomTxt(e.target.value)
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