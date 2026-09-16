import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import data from "../data/recipes.json"
import "../style/Recipe.css"

function Recipe() {
    let { id } = useParams();
    const navigate = useNavigate();

    if (!id) {
        navigate("/Error");
    }
    const recipe = data.recipes.find((recipe)=> recipe.id === parseInt(String(id)));

    return (
        <>
                <main className="page-content recipe-page" key={recipe?.id}>
                    <h1>{recipe?.name}</h1>
                    <img className="recipe-image" src={recipe?.image} alt={recipe?.name} />
                    <section className="recipe-copy">
                        <h2>Ingredients</h2>
                        <p>{recipe?.ingredients}</p>
                        <h2>Instructions</h2>
                        <p>{recipe?.instructions}</p>
                    </section>
                </main>
        </>
    )

}

export default Recipe;