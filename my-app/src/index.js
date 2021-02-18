import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
// This is a stateless component and this much always return something 
// Always return JSX

// function Greeting(){
//   return <h4>This is marc and this is my first component</h4>;
// }

function Booklist () {
  return (
    <section className='booklist'>
      <Book />
    
    </section>
  )
}

const Book = () =>{
  return <article className='book'>
    <img className='photo' src="https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg" alt=""/>
    <h1>The Intelligent Investor: The Definitive Book</h1>
    <h4>Benjamin Graham</h4>
  </article>
}



ReactDom.render(<Booklist />, document.getElementById('root'));