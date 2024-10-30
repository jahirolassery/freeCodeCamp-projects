import React, { Component } from 'react'
import "./quotes.css"

export default class Quotes extends Component {

    constructor(props){
        super(props)

        this.state = {
            randomQuotes : [
                '"The only limit to our realization of tomorrow is our doubts of today."',
                '"Do not wait to strike till the iron is hot; but make it hot by striking.',
                '"Success is not the key to happiness. Happiness is the key to success.',
                `"Life is what happens when you're busy making other plans.`,
                '"In the end, we will remember not the words of our enemies, but the silence of our friends.',
                '"The best way to predict the future is to invent it.',
                `"It always seems impossible until it's done.`,
                '"Success usually comes to those who are too busy to be looking for it.',
                '"Don’t watch the clock; do what it does. Keep going.',
                '"What you get by achieving your goals is not as important as what you become by achieving your goals.'
              ],
              
              authors : [
                "- Franklin D. Roosevelt",
                "- William Butler Yeats",
                "- Albert Schweitzer",
                "- John Lennon",
                "- Martin Luther King Jr.",
                "- Alan Kay",
                "- Nelson Mandela",
                "- Henry David Thoreau",
                "- Sam Levenson",
                "-  Zig Ziglar"
              ],
              number: 0,
              backGrounds: [
                "Red",
                "Blue",
                "Green",
                "Yellow",
                "Purple",
                "Orange",
                "Pink",
                "Brown",
                "Black",
                "White"
              ],

              color: 0
              
        }
    }

    randomeNumber =  () => {
        
         const number = Math.floor(Math.random() * 9);
         this.setState({
            number: number
         });

         const color = Math.floor(Math.random() * 9)
         this.setState({
            color: color
         })


    }

   
  render() {
    const randomeNumber = this.state.number;
    const color = this.state.color;


    
      
    return (
    <div id="body" style={{backgroundColor: this.state.backGrounds[color]}}>
    <div id="quote-box"style={{color: this.state.backGrounds[color]}}>
      <div id="quote">
      <h1 id="text">{this.state.randomQuotes[randomeNumber]}</h1>
      <p id="author">{this.state.authors[randomeNumber]}</p>
      </div>
      <div id="function">
      
      <a href="twitter.com/intent/tweet" id="tweet-quote"><button id="tweet-btn" style={{backgroundColor: this.state.backGrounds[color]}}>Tweet</button></a>
      <button style={{backgroundColor: this.state.backGrounds[color]}} id='new-quote' onClick={this.randomeNumber}>New Quote</button>
      </div>
    </div>
    </div>  
    )
  }
}
