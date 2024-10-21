import React from 'react'
import { Link } from 'react-router-dom';

const FirstComponent = () => {
  
  return (
    <div className="inicio-container"> 
    <h1>Air Jordan</h1><br/>


      
      <p> <br/><button><Link to={'Segundo'}>Sobre a Air Jordan</Link></button> </p>
      <h2> <button><Link to={'Terceiro'}> Principais Tênis</Link></button>   </h2>
      

     
      
      </div>
  )
}

export default FirstComponent