import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {books} from './books'
import Book from './Book'
// This is a stateless component and this much always return something 
// Always return JSX

// function Greeting(){
//   return <h4>This is marc and this is my first component</h4>;
// }

// setup vars

// const names = ['john','doe','susan']
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
// });
// console.log(newNames)

function Booklist () {
  return (
    <section className='booklist'>
      {books.map((book) =>{
        return (
          <Book key={book.id} {...book}></Book>         
        );
      })}
      </section>
  );
}




ReactDom.render(<Booklist />, document.getElementById('root'));