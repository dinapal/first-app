import React, { Component } from "react";
import './App.css';
import Books from "./Components/Books";

class App extends Component {
  state = {
    books: [
      {name: 'Clean Code', author: 'Robert Cecil Martin'},
      {name: 'The Pragmatic Programmer', author: 'Andy Hunt and Dave Thomas'},
      {name: 'Introduction to Algorithms', author: 'Thomas H. Cormen,'}
    ]
  }
// Change the states
  changeBooksState = (updatedName) => {
    this.setState({
      books: [
        {name: updatedName, author: 'Robert Cecil Martin'},
        {name: 'The Pragmatic Programmer', author: 'Andy Hunt and Dave Thomas'},
        {name: 'Introduction to Algorithms', author: 'Thomas H. Cormen,'}
      ]
    });
  }
  changeText = event => {
    this.setState({
      books: [
        {name: event.target.value, author: 'Robert Cecil Martin'},
        {name: 'The Pragmatic Programmer', author: 'Andy Hunt and Dave Thomas'},
        {name: 'Introduction to Algorithms', author: 'Thomas H. Cormen,'}
      ]
    });
  }
  render(){
    return (
     <div className="App">
       <h1>Hello Books App</h1>
       <input type="text" onChange={this.changeText} />
        <button onClick={this.changeBooksState.bind(this, 'Clean Code 1(updated)')}>Change Books State</button>
        <Books 
        name={this.state.books[0].name} 
        author={this.state.books[0].author} 
        change={this.changeBooksState.bind(this, 'Clean Code (updated)21')}
        bookNameUpdate={this.changeText}
         />
        <Books name={this.state.books[1].name} author={this.state.books[1].author} />
        <Books name={this.state.books[2].name} author={this.state.books[2].author} />
     </div>
    );
  }
}

export default App;
