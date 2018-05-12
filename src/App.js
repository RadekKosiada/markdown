import React, { Component } from 'react';
import marked from 'marked';



const defaultText = 

`#### Welcome to my **Markdown Viewer** 

#### made as one of the challenges from 

#### [freeCodeCamp](https://www.freecodecamp.org/challenges/build-a-markdown-previewer).


#### Feel free to delete this text 
#### and play around using:

Headings
=======
Sub-headings
-----------
### Some other deeper headings
Paragraphs

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Unordered list:
  * item1
  * item2

Numbered list:

  1. item1
  2. item2

##### Have fun!

##### [Radek](https://twitter.com/RadekKosiada/) `


class App extends Component {
  constructor(props) {
    super(props); 
// initializing the value of the markdown with a default text
    this.state = { markdown: defaultText }
  }

  // function that will modify the state
  updateMarkdown = function(text){
    this.setState({markdown: text});
  }
 
  render() {
    // assigning the value of markdown to this state to hold the value of state
    let {markdown} = this.state;

    return (
      <div className="App container">
      <h1 id="app-title">Radek's Markdown Viewer</h1>     
        <div className="row">
         
          <div className="col-md-6">
            <h2 id="input-title">Input</h2>
            <textarea 
              id="input" className="form-control" 
              value= {markdown} 
              // function onChange will run every time our value changes
              // event.target.value is our text in the textarea an that's what are setting the state to
              onChange={(event) => this.updateMarkdown (event.target.value)}
            />
          </div>

          <div className="col-md-6">
            <h2 id="output-title">Output</h2>
            <div 
              id="output" 
              className="form-control no-border" 
              // using just {marked(markdown)} would set the value of state, but as a string. 
              // to adapt the input into HTML we use:
              dangerouslySetInnerHTML ={{__html: marked(markdown)}}>           
            </div>
          </div>
          
        </div>        
      </div>
    );
  } 
};

export default App;
