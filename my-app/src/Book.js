import React from 'react'
import {books} from './books'


const clickHandler = () => {
  alert("Hello World!");
};

const complexExample = (author) => {
  alert(author);
};

const Book = (props) =>{
  const {img, title, author} = props;
  return (
  <article className='book' onMouseOver={ () => {
        console.log(title);
  }}>
    <img className='photo' src={img} alt=''/>
    <h1 onClick={() => console.log("title")}>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>Reference Example</button>
    <button type="button" onClick={() => complexExample(author)}>
        more complex example
        </button>
    
  </article>
  );
};

export default Book
