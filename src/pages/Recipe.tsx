import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import data from "../data/recipes.json"
import "../style/Recipe.css"

function Recipe() {
    const { id } = useParams();

    const recipeId = Number(id);
    const recipe = data.recipes.find(
        (recipe) => recipe.id === recipeId
    );

    if (!id) {
        return <Navigate to="/error" replace />;
    }

    if (!recipe) {
        return <Navigate to="/error" replace />;
    }

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