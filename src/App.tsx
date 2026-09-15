import './App.css'
import { useState } from 'react'
import data from "./data/recipes.json"
import "./style/acceuil.css"
import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <section id="center">
        {data.recipes.map((recipe)=>(
          <div key ={recipe.id}>
            <h2>{recipe.name}</h2>
            <Link to={`recipe/${recipe.id}`}><img id="image" src={recipe.image} alt={recipe.name} /></Link>
            <p>{recipe.prepTimeMinutes} minutes</p> 
          </div>
        ))}
      </section>
    </>
  )
}

export default App