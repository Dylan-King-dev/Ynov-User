import "./style/App.css"
import data from "./data/recipes.json"
import { Link } from "react-router-dom"

function App() {

  return (
    <>
    <main className="page-content">
      <h1>King Dylan</h1>
      <section id="center" className="recipe-grid">
        {data.recipes.map((recipe)=>(
          <article className="recipe-card" key ={recipe.id}>
            <h2>{recipe.name}</h2>
            <Link to={`recipe/${recipe.id}`}><img className="card-image" src={recipe.image} alt={recipe.name} /></Link>
            <p className="recipe-time">Temps: {recipe.prepTimeMinutes} mins</p>
          </article>
        ))}
      </section>
    </main>
    </>
  )
}

export default App